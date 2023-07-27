const { body } = require("express-validator");
const VehicleServiceGet = require("./services/VehicleServiceGet");

const VehicleValidators = {
  idVehicle: (location = body, forCreate = true, field = "idVehicle") => {
    return location(field)
      .notEmpty()
      .withMessage("ID Vehicle wajib diisi.")
      .bail()
      .trim()
      .custom(async (value) => {
        const vehicle = await VehicleServiceGet("idVehicle", value);

        if (forCreate && vehicle) {
          return Promise.reject("ID Vehicle sudah digunakan.");
        } else if (!forCreate && !vehicle) {
          return Promise.reject("ID Vehicle tidak tersedia.");
        }

        return Promise.resolve(value);
      });
  },
  nameVehicle: (location = body, field = "nameVehicle") => {
    return location(field)
      .notEmpty()
      .withMessage("Nama Vehicle wajib diisi.")
      .bail()
      .trim()
      .isLength({ min: 5 })
      .withMessage("Nama Vehicle minimal 5 karakter.");
  },
  vehicle_brand_id: (location = body, field = "vehicle_brand_id") => {
    return location(field)
      .notEmpty()
      .withMessage("ID Vehicle Brand wajib diisi.")
      .bail()
      .trim()
      .isInt()
      .withMessage("ID Vehicle Brand harus berupa angka.");
  },
  //   photoVehicle: (location = body, field = "photoVehicle") => {
  //     return location(field).notEmpty().withMessage("Foto Vehicle wajib diisi.");
  //   },
  price: (location = body, field = "price") => {
    return location(field)
      .notEmpty()
      .withMessage("Harga wajib diisi.")
      .bail()
      .isInt()
      .withMessage("Harga harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => {
        if (value <= 0) {
          throw new Error("Harga harus lebih dari 0.");
        }
        return true;
      });
  },
  year: (location = body, field = "year") => {
    return location(field)
      .notEmpty()
      .withMessage("Tahun wajib diisi.")
      .bail()
      .isInt()
      .withMessage("Tahun harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => {
        const currentYear = new Date().getFullYear();
        if (value < 1900 || value > currentYear) {
          throw new Error("Tahun harus di antara 1900 dan tahun sekarang.");
        }
        return true;
      });
  },
  created_at: (location = body, field = "created_at") => {
    return location(field).notEmpty().withMessage("Created At wajib diisi.");
  },
  updated_at: (location = body, field = "updated_at") => {
    return location(field).notEmpty().withMessage("Updated At wajib diisi.");
  },
  created_by: (location = body, field = "created_by") => {
    return location(field).notEmpty().withMessage("Created By wajib diisi.");
  },
  updated_by: (location = body, field = "updated_by") => {
    return location(field).notEmpty().withMessage("Updated By wajib diisi.");
  },
};

module.exports = VehicleValidators;
