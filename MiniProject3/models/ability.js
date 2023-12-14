const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const abilitySchema = new Schema({

  displayName: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  displayIcon: { type: String, required: true },

  agentID: { type: mongoose.Types.ObjectId, ref: "Agent" },

});
module.exports = mongoose.model("ability", abilitySchema);