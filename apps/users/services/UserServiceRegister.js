var bcrypt = require("bcryptjs");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { USERS_CONFIG_MAIN_TABLE } = require("../config");

const UserServiceRegister = async (idUser, fullname, email, password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  await BaseServiceQueryBuilder(USERS_CONFIG_MAIN_TABLE).insert({
    idUser,
    fullname,
    email,
    password: passwordHash,
    // photoUser,
  });

  return { idUser, fullname, email, password };
};

module.exports = UserServiceRegister;
