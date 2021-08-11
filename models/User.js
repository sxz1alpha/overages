const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



// class User {
//     constructor(name = '') {
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//         this.ss = ss;
//         this.add = address;
//         this.Econ = emergency_contact
//     }
// }

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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10-12]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [15-170]
            }
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