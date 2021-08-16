const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    
    sequelize = new Sequelize(
        process.env.DB_name, 
        process.env.DB_user, 
        process.env.DB_pass, 
        {
        host: 'localhost',
        dialect: 'mysql',
        post: 1337
        }
    );
}


module.exports = sequelize;