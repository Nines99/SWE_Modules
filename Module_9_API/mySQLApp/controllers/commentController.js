"use strict";
let Models = require("../models"); //matches index.js
const getComments = (res) => {

  //finds all users

  Models.Comment.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
// res.send("Success from Controller!")
};

const createComment = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  Models.Comment.create(data)  // Change this Weekend!!
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComment = (req, res) => {
  Models.Comment.findByIdAndUpdate(req.params.id,req.body, {
      useFindAndModify: false, 

  }).then(function (data) {
      res.send({ result: 200, data: data })
  }).catch(err => {
      throw err
  })
}

module.exports = {
  getComments,
  createComment,
  updateComment,
};
