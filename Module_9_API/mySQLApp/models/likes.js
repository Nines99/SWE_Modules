const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Users = require("./user")
const Comments = require("./comments")
class Likes extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Likes.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
    },

    Likes: {
        type: DataTypes.STRING, allowNull: false, required: true,
        // indexes: [{ constraint: 'debts_ibfk_2' }],
    },

    CommentID: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Comments, //reference to another model
          key: "id", //column name of the referenced model
          indexes: [{ unique: true }],
      }},
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
        sequelize: sequelizeInstance, modelName: 'Likes', timestamps: true, freezeTableName: true
    }
)
module.exports = Likes;