let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
// res.send("Success!");
});
router.post("/create", (req, res) => {
Controllers.likeController.createLike(req.body, res);
});
module.exports = router;
