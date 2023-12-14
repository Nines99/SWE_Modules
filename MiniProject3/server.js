const express = require("express");
const app = express();
let dbConnect = require("./dbConnect");

require("dotenv").config();

// parse requests of content-type -application/json
app.use(express.json());
app.get("/", (req, res) => {

  res.json({ message: "Welcome to my MongoDB application for Valorant API" });
});
// set port, listen for requests

let abilityRoutes = require('./routes/abilityRoutes');
app.use('/api/ability', abilityRoutes);

let agentRoutes = require('./routes/agentRoutes');
app.use('/api/agents', agentRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
