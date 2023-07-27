const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceDelete = async (idVehicle) => {
  try {
    await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE)
      .where({ idVehicle })
      .del();
  } catch (error) {
    console.log(error);
  } finally {
    return null;
  }
};

module.exports = VehicleServiceDelete;
