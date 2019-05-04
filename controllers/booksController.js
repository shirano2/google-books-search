const db = require("../models");
const axios = require("axios");

//defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findData: function(req, res) {
    axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then((results) => {
      res.json(results.data.items)
    })
    .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};