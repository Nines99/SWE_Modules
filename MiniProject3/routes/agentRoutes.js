let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.agentController.getAgents(res);
// res.send("Success!");

});

router.post("/create", (req, res) => {
  Controllers.agentController.createAgent(req.body, res);

});

router.put('/:id', (req, res) => {
    Controllers.agentController.updateAgent(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.agentController.deleteAgent(req, res)
})

module.exports = router;