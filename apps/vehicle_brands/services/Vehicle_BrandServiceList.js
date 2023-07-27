const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const VehicleBrandServiceList = async (terms, page) => {
  const queryBuilder = BaseServiceQueryBuilder(
    VEHICLE_BRANDS_CONFIG_MAIN_TABLE
  );

  if (terms) {
    queryBuilder
      .whereILike("idBrand", `%${terms}%`)
      .orWhereILike("nameBrand", `%${terms}%`);
  }

  return {
    ...(await BaseServicePaginator(page, queryBuilder)),
    terms: terms ? terms : "",
  };
};

module.exports = VehicleBrandServiceList;
