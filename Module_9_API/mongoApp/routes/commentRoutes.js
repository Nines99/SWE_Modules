let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
router.get("/", (req, res) => {
  // Controllers.commentController.getComment(res);
  Controllers.commentController.getComments(res);
// res.send("Success!");
});
router.post("/create", (req, res) => {
//   Controllers.userController.createUser(req.body, res);
});
module.exports = router;
