const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const agentSchema = new Schema({

  displayName: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  displayIcon: { type: String, required: true },
  role: { type: String },


});
module.exports = mongoose.model("agent", agentSchema);