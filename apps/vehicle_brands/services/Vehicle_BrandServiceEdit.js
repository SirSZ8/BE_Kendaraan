const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const VehicleBrandServiceEdit = async (idBrand, nameBrand, updated_at) => {
  const data = {
    nameBrand,
    updated_at,
  };

  await BaseServiceQueryBuilder(VEHICLE_BRANDS_CONFIG_MAIN_TABLE)
    .where({ idBrand })
    .update(data);

  return { idBrand, ...data };
};

module.exports = VehicleBrandServiceEdit;
