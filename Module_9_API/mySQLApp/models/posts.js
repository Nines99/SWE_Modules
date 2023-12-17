const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Users = require("./user")
class Posts extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Posts.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
    },
    Title: {
        type: DataTypes.STRING, allowNull: false, required: true,
        // indexes: [{ constraint: 'debts_ibfk_2' }],
    },
    Description: {
        type: DataTypes.STRING, allowNull: true, required: true,
    },
    DateofCreation: {
        type: DataTypes.STRING, allowNull: false, required: true,
    },
    Picture: {
        type: DataTypes.STRING, allowNull: false, required: true,
    },
    UserID: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Users, //reference to another model
          key: "id", //column name of the referenced model
          indexes: [{ unique: true }],
      }
  },
},
    {
        sequelize: sequelizeInstance, modelName: 'Posts', timestamps: true, freezeTableName: true
    }
)
module.exports = Posts;

