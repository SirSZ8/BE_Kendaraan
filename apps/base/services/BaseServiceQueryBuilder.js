const BaseServiceQueryBuilder = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "db_kendaraan",
  },
});

module.exports = BaseServiceQueryBuilder;
