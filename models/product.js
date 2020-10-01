const Sequelize = require('sequelize');
const sequelize = require('../helper/database'); 

const Product = sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true,
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
    sale:{
        type:Sequelize.DOUBLE,

    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    color: {
        type:Sequelize.STRING,
    },
    shortDescription:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    fullDescription:{
         type: Sequelize.TEXT,
         allowNull:false,
    },
    brand:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    model:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    released:{
        type:Sequelize.DATE,
    },
    dimensions:{
        type:Sequelize.STRING,
    },
    displaySize:{
        type:Sequelize.STRING,
    },
    features:{
        type:Sequelize.STRING,
    }

});

module.exports = Product;