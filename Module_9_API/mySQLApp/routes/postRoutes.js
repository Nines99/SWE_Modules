let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
// res.send("Success!");
});
router.post("/create", (req, res) => {

Controllers.postController.createPosts(req.body, res);

});
module.exports = router;
