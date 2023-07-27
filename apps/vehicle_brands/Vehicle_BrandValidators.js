const { body } = require("express-validator");
const VehicleBrandServiceGet = require("./services/Vehicle_BrandServiceGet");

const Vehicle_BrandValidators = {
  idBrand: (location = body, forCreate = true, field = "idBrand") => {
    return location(field)
      .notEmpty()
      .withMessage("ID Brand wajib diisi.")
      .bail()
      .trim()
      .custom(async (value) => {
        const brand = await VehicleBrandServiceGet("idBrand", value);

        if (forCreate && brand) {
          return Promise.reject("ID Brand sudah digunakan.");
        } else if (!forCreate && !brand) {
          return Promise.reject("ID Brand tidak tersedia.");
        }

        return Promise.resolve(value);
      });
  },
  nameBrand: (location = body, field = "nameBrand") => {
    return location(field)
      .notEmpty()
      .withMessage("Nama Brand wajib diisi.")
      .bail()
      .trim()
      .isLength({ min: 3 })
      .withMessage("Nama Brand minimal 3 karakter.");
  },
  // photoBrand: (location = body, field = "photoBrand") => {
  //   return location(field).notEmpty().withMessage("Foto Brand wajib diisi.");
  // },
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

module.exports = Vehicle_BrandValidators;
