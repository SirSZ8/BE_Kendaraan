const { body } = require("express-validator");
var bcrypt = require("bcryptjs");
const UserServiceIsEmailExist = require("./services/UserServiceIsEmailExist");
const UserServiceFetch = require("./services/UserServiceFetch");
const BaseValidatorHandleUndefined = require("../base/validators/BaseValidatorHandleUndefined");
// const { param } = require("express-validator");
// const multer = require("multer");

// const photoUpload = multer({
//   storage: multer.memoryStorage(),
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith("image/")) {
//       cb(null, true);
//     } else {
//       cb(new Error("File yang diunggah harus berupa gambar."));
//     }
//   },
//   limits: {
//     fileSize: 5 * 1024 * 1024, // Batas ukuran file: 5 MB
//   },
// }).single("photo");

const UserValidators = {
  idUser: (location = body, forCreate = true, field = "idUser") => {
    return location(field)
      .notEmpty()
      .withMessage("ID wajib diisi.")
      .bail()
      .isInt()
      .withMessage("ID harus berupa angka.");
  },
  email: (location = body, forCreate = true, field = "email") => {
    return location(field)
      .notEmpty()
      .withMessage("Email wajib diisi.")
      .bail()
      .trim()
      .isEmail()
      .withMessage("Email tidak valid.")
      .bail()
      .custom(async (value) => {
        const user = await UserServiceIsEmailExist(value);
        if (forCreate && user) {
          return Promise.reject("Email sudah terdaftar.");
        } else if (!forCreate && !user) {
          return Promise.reject("User tidak tersedia.");
        }

        return Promise.resolve(true);
      });
  },
  password: (location = body, forCreate = true, field = "password") => {
    return location(field)
      .notEmpty()
      .withMessage("Password wajib diisi.")
      .trim()
      .isLength({ min: 8, max: 100 })
      .withMessage("Password minimal 8 karakter.")
      .bail()
      .custom(async (value, { req }) => {
        if (!forCreate) {
          const user = await UserServiceFetch(req.body.email);
          BaseValidatorHandleUndefined(user, "email");
          // const isValidPassword = await bcrypt.compare(value, user.password);
          // if (!isValidPassword) {
          //   return Promise.reject("Password tidak sesuai.");
          // }
        }
        return Promise.resolve(true);
      });
  },
  fullname: (location = body, field = "fullname") => {
    return location(field)
      .notEmpty()
      .withMessage("Nama wajib diisi")
      .bail()
      .trim()
      .customSanitizer((value) =>
        value.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      );
  },

  // photoUser: (location = body, forCreate = true, field = "photoUser") => {
  //   return location(field).custom((value, { req }) => {
  //     return new Promise((resolve, reject) => {
  //       photoUpload(req, req.res, (err) => {
  //         if (err instanceof multer.MulterError) {
  //           reject(new Error("Ukuran file foto terlalu besar. Maksimum 5 MB."));
  //         } else if (err) {
  //           reject(err);
  //         } else {
  //           if (forCreate && !req.file) {
  //             reject(new Error("Photo wajib diunggah."));
  //           } else if (!forCreate && req.file === undefined) {
  //             // Jika properti photo tidak ada dalam request untuk update data user,
  //             // maka kembalikan true agar validasi berjalan dengan baik saat tidak ada perubahan pada foto.
  //             resolve(true);
  //           }
  //           resolve(true);
  //         }
  //       });
  //     });
  //   });
  // },
};
module.exports = UserValidators;
