const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceCreate = async (
  idVehicle,
  nameVehicle,
  vehicle_brand_id,
  price,
  year,
  created_at,
  updated_at
) => {
  const data = {
    idVehicle,
    nameVehicle,
    vehicle_brand_id,
    price,
    year,
    created_at,
    updated_at,
  };

  await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE).insert(data);

  return data;
};

module.exports = VehicleServiceCreate;
