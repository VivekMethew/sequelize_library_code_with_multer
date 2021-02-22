const { Sequelize, DataTypes } = require('sequelize');
const { connection } = require('../config/connection')

const User = connection.define('User1', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fname: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    lname: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    email: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    password: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    phone: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    imgPath: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: null
    }
})

module.exports = { User }