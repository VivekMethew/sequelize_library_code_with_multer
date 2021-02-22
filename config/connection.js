const { Sequelize, DataTypes } = require('sequelize');


const connection = new Sequelize('users_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

connection.sync()
    .then(() => {
        console.log(`Database Synced...`)
    })

module.exports = { connection }