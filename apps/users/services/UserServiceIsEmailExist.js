const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { USERS_CONFIG_MAIN_TABLE } = require("../config");

const UserServiceIsEmailExist = async (email) => {
  const user = (
    await BaseServiceQueryBuilder(USERS_CONFIG_MAIN_TABLE).where({ email })
  )[0];

  return user ? true : false;
};

module.exports = UserServiceIsEmailExist;
