const Sequalize = require("sequelize");

const { DATANAME, PASSWORD, USERNAME, HOSTNAME} =require('./config');


const sequalize = new Sequalize(DATANAME, USERNAME, PASSWORD, {
    dialect: "mysql",
    host: HOSTNAME,
});
module.exports = sequalize;