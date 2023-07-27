const { param } = require("express-validator");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../users/services/UserServiceTokenAuthentication");

const VehicleServiceEdit = require("./services/VehicleServiceEdit");
const VehicleServiceGet = require("./services/VehicleServiceGet");
const VehicleServiceCreate = require("./services/VehicleServiceCreate");
const VehicleServiceList = require("./services/VehicleServiceList");
const VehicleServiceDelete = require("./services/VehicleServiceDelete");
const BaseValidatorQueryPage = require("../base/validators/BaseValidatorQueryPage");
const VehicleValidators = require("./VehicleValidators");
const VehicleControllers = require("express").Router();

VehicleControllers.post(
  "/",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.idVehicle(),
    VehicleValidators.nameVehicle(),
    VehicleValidators.vehicle_brand_id(),
    // VehicleValidators.photoVehicle(),
    VehicleValidators.price(),
    VehicleValidators.year(),
    VehicleValidators.created_at(),
    VehicleValidators.updated_at(),
    VehicleValidators.created_by(),
    VehicleValidators.updated_by(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const vehicle = await VehicleServiceCreate({
      idVehicle: req.body.idVehicle,
      nameVehicle: req.body.nameVehicle,
      vehicle_brand_id: req.body.vehicle_brand_id,
      //   photoVehicle: req.body.photoVehicle,
      price: req.body.price,
      year: req.body.year,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
    });
    return res.status(201).json(vehicle);
  }
);

VehicleControllers.get(
  "/",
  [
    UserServiceTokenAuthentication,
    BaseValidatorQueryPage(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const vehicles = await VehicleServiceList(req.query.terms, req.query.page);
    return res.status(200).json(vehicles);
  }
);

VehicleControllers.get(
  "/:idVehicle",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.idVehicle(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const vehicle = await VehicleServiceGet("idVehicle", req.params.idVehicle);
    return res.status(200).json(vehicle);
  }
);

VehicleControllers.put(
  "/:idVehicle",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.idVehicle(param, false),
    VehicleValidators.nameVehicle(),
    VehicleValidators.vehicle_brand_id(),
    // VehicleValidators.photoVehicle(),
    VehicleValidators.price(),
    VehicleValidators.year(),
    VehicleValidators.updated_at(),
    VehicleValidators.updated_by(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const vehicle = await VehicleServiceEdit(req.params.idVehicle, {
      nameVehicle: req.body.nameVehicle,
      vehicle_brand_id: req.body.vehicle_brand_id,
      //   photoVehicle: req.body.photoVehicle,
      price: req.body.price,
      year: req.body.year,
      updated_at: req.body.updated_at,
      updated_by: req.body.updated_by,
    });
    return res.status(200).json(vehicle);
  }
);

VehicleControllers.delete(
  "/:idVehicle",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.idVehicle(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const vehicle = await VehicleServiceDelete(req.params.idVehicle);
    return res.status(204).json(vehicle);
  }
);

module.exports = VehicleControllers;
