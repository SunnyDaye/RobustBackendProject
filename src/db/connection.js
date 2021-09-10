const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment]; //Grabbing the configuration object based on the env
const knex = require("knex")(config);

module.exports = knex;
