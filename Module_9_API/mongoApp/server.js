const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content - type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to myMongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let userPosts = require('./routes/postRoutes')
app.use('/api/posts', userPosts)

let userComments = require('./routes/commentRoutes')
app.use('/api/comments', userComments)

let userLikes = require('./routes/likeRoutes')
app.use('/api/likes', userLikes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
