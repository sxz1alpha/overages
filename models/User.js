const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {
    
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phonenumber: {
            type: DataTypes.CHAR(15),
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }
);

module.exports = User;