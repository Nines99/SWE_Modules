const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeSchema = new Schema({

  Likes: { type: Number, required: true },
  UserID: { type: String, required: true },
  CommentID: { type: String, required: true },

});
module.exports = mongoose.model("like", likeSchema);

//The "user" mentioned in the above line should be in lowercase
//singular form ..whereas the actual collection name in
//mongodb will be in the plural form.
//Refer to mongoose documentation for more:
// https://www.npmjs.com/package/mongoose
//The first argument is the singular name of your collection.
//Mongoose automatically looks for the lowercase plural version.
// For example, if you use
//const MyModel = mongoose.model('Ticket', mySchema);
//Then MyModel will use the tickets collection, not the Ticket collection.
