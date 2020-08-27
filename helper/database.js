const Sequelize = require('sequelize');

const sequelize = new Sequelize('intershop','root','',{
    dialect:'mysql',
    host: 'localhost',
});

module.exports = sequelize;