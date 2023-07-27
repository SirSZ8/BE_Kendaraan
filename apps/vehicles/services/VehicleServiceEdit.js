const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceEdit = async (
  idVehicle,
  nameVehicle,
  price,
  year,
  updated_at
) => {
  const data = {
    nameVehicle,
    price,
    year,
    updated_at,
  };

  await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE)
    .where({ idVehicle })
    .update(data);

  return { idVehicle, ...data };
};

module.exports = VehicleServiceEdit;
