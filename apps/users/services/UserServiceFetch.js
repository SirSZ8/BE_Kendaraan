const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { USERS_CONFIG_MAIN_TABLE } = require("../config");

const UserServiceFetch = async (email) => {
  const user = (
    await BaseServiceQueryBuilder(USERS_CONFIG_MAIN_TABLE).where({
      email,
    })
  )[0];

  return user;
};

module.exports = UserServiceFetch;
