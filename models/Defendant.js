// makes defendant objects out of the db data. each object will populate a card.

const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');


class Defendant extends Model {
    
}

Defendant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        parcel_id: {
            type: DataTypes.STRING,
        },
        def_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sale_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        co_def_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        owner_mail_add: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city_state: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'defendant'
    }
);
    
    module.exports = Defendant;
    
    