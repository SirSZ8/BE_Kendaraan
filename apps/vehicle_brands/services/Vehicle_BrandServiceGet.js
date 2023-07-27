const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const _ = require("lodash");
const { VEHICLE_BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const VehicleBrandServiceGet = async (field, value, many = false) => {
  const results = await BaseServiceQueryBuilder(
    VEHICLE_BRANDS_CONFIG_MAIN_TABLE
  ).where({ [field]: value });

  if (many) return results;

  return results[0];
};

module.exports = VehicleBrandServiceGet;
