const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const VehicleBrandServiceCreate = async (
  idBrand,
  nameBrand,
  created_at,
  updated_at
) => {
  const data = {
    idBrand,
    nameBrand,
    created_at,
    updated_at,
  };

  await BaseServiceQueryBuilder(VEHICLE_BRANDS_CONFIG_MAIN_TABLE).insert(data);

  return data;
};

module.exports = VehicleBrandServiceCreate;
