const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({

  Title: { type: String, trim: true, required: true },
  Description: { type: String, trim: true, required: true },
  DateofCreation: { type: String, default: Date.now },
  Picture: { type: String, required: true },
  
  UserID: { type: String, required: true },

});
module.exports = mongoose.model("post", postSchema);

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
