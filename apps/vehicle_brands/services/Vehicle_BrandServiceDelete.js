const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const VehicleBrandServiceDelete = async (idBrand) => {
  try {
    await BaseServiceQueryBuilder(VEHICLE_BRANDS_CONFIG_MAIN_TABLE)
      .where({ idBrand })
      .del();
  } catch (error) {
    console.log(error);
  } finally {
    return null;
  }
};

module.exports = VehicleBrandServiceDelete;
