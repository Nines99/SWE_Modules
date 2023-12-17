const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Users = require("./user")
const Posts = require("./posts")
class Comments extends Model { }
//Sequelize will create this table if it doesn't exist on startup 
Comments.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
    },

   Content: {
        type: DataTypes.STRING, allowNull: false, required: true,
        // indexes: [{ constraint: 'debts_ibfk_2' }],
    },

    PostID: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Posts, //reference to another model
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
        sequelize: sequelizeInstance, modelName:  'Comments', timestamps: true, freezeTableName: true
    }
)
module.exports = Comments;
