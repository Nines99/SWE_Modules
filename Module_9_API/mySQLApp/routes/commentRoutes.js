let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
router.get("/", (req, res) => {
  // Controllers.commentController.getComment(res);
  Controllers.commentController.getComments(res);
// res.send("Success!");
});
router.post("/create", (req, res) => {
Controllers.commentController.createComment(req.body, res);
});
router.put('/:id', (req, res) => {
  Controllers.commentController.updateComment(req, res)
})
module.exports = router;


// 65778ccbe3196c498c370820 Emily Johnson
// 65778ce3e3196c498c370822 Marcus Rodriguez
// 65778ceee3196c498c370824 Olivia Patel