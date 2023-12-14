"use strict";
let Models = require("../models"); //matches index.js
const mongoose = require("mongoose")

const getLikes = (res) => {

  //finds all users

  Models.Likes.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
// res.send("Success from Controller!")
};
const createLike = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Likes(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getLikes,
  createLike,
};
