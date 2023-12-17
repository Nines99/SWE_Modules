const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Users extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Users.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
        indexes: [{ constraint: 'debts_ibfk_2' }],
    },
    Name: {
        type: DataTypes.STRING, allowNull: false, required: true,
        // indexes: [{ constraint: 'debts_ibfk_2' }],
    },
    DateofBirth: {
        type: DataTypes.INTEGER, allowNull: true, required: true,
    },
    UserName: {
        type: DataTypes.STRING, allowNull: false, required: true,
    },
    Password: {
        type: DataTypes.STRING, allowNull: false, required: true,
    },
    Picture: {
        type: DataTypes.INTEGER, allowNull: true, required: true
    },
},
    {
        sequelize: sequelizeInstance, modelName: 'Users', timestamps: true, freezeTableName: true
    }
)
module.exports = Users;