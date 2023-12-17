"use strict";
let Models = require("../models"); //matches index.js


const getPosts = (res) => {

  //finds all.Postss

  Models.Post.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
// res.send("Success from Controller!")
};

const createPosts = (data, res) => {
  //creates a new.Posts using JSON data POSTed in request body
  console.log(data);
  new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  createPosts,
};
