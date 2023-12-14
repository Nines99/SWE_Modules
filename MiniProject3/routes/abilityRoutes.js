let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.abilityController.getAbilities(res);
// res.send("Success!");

});

router.post("/create", (req, res) => {
  Controllers.abilityController.createAbility(req.body, res);

});

router.put('/:id', (req, res) => {
  Controllers.abilityController.updateAbility(req, res)
})

router.delete('/:id', (req, res) => {
  Controllers.abilityController.deleteAbility(req, res)
})

module.exports = router;