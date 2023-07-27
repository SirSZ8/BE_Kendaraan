const { param } = require("express-validator");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../users/services/UserServiceTokenAuthentication");

const VehicleBrandServiceCreate = require("./services/Vehicle_BrandServiceCreate");
const VehicleBrandServiceGet = require("./services/Vehicle_BrandServiceGet");
const VehicleBrandServiceEdit = require("./services/Vehicle_BrandServiceEdit");
const VehicleBrandServiceList = require("./services/Vehicle_BrandServiceList");
const VehicleBrandServiceDelete = require("./services/Vehicle_BrandServiceDelete");

const BaseValidatorQueryPage = require("../base/validators/BaseValidatorQueryPage");
const Vehicle_BrandValidators = require("./Vehicle_BrandValidators");
const Vehicle_BrandControllers = require("express").Router();

Vehicle_BrandControllers.post(
  "/",
  [
    UserServiceTokenAuthentication,
    Vehicle_BrandValidators.idBrand(),
    Vehicle_BrandValidators.nameBrand(),
    // Vehicle_BrandsValidators.photoBrand(),
    // Vehicle_BrandsValidators.created_at(),
    // Vehicle_BrandsValidators.updated_at(),
    Vehicle_BrandValidators.created_by(),
    Vehicle_BrandValidators.updated_by(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const brand = await VehicleBrandServiceCreate({
      idBrand: req.body.idBrand,
      nameBrand: req.body.nameBrand,
      //   photoBrand: req.body.photoBrand,
      //   created_at: req.body.created_at,
      //   updated_at: req.body.updated_at,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
    });
    return res.status(201).json(brand);
  }
);

Vehicle_BrandControllers.get(
  "/",
  [
    UserServiceTokenAuthentication,
    BaseValidatorQueryPage(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const brands = await VehicleBrandServiceList(
      req.query.terms,
      req.query.page
    );
    return res.status(200).json(brands);
  }
);

Vehicle_BrandControllers.get(
  "/:idBrand",
  [
    UserServiceTokenAuthentication,
    Vehicle_BrandValidators.idBrand(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const brand = await VehicleBrandServiceGet("idBrand", req.params.idBrand);
    return res.status(200).json(brand);
  }
);

Vehicle_BrandControllers.put(
  "/:idBrand",
  [
    UserServiceTokenAuthentication,
    Vehicle_BrandValidators.idBrand(param, false),
    Vehicle_BrandValidators.nameBrand(),
    // Vehicle_BrandsValidators.photoBrand(),
    Vehicle_BrandValidators.updated_at(),
    Vehicle_BrandValidators.updated_by(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const brand = await VehicleBrandServiceEdit(req.params.idBrand, {
      nameBrand: req.body.nameBrand,
      //   photoBrand: req.body.photoBrand,
      updated_at: req.body.updated_at,
      updated_by: req.body.updated_by,
    });
    return res.status(200).json(brand);
  }
);

Vehicle_BrandControllers.delete(
  "/:idBrand",
  [
    UserServiceTokenAuthentication,
    Vehicle_BrandValidators.idBrand(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const brand = await VehicleBrandServiceDelete(req.params.idBrand);
    return res.status(204).json(brand);
  }
);

module.exports = Vehicle_BrandControllers;
