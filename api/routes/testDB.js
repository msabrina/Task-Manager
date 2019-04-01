const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const mongodb = require("mongodb");

const Todos = require('../models/db');
// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";
router.get("/", function(req, res, next) {
    res.send(databaseConnection);
});
// Connecting to MongoDB
mongoose.connect('mongodb://localhost/testDB',
                  { useNewUrlParser: true }
                 );
// If there is a connection error send an error message
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
    databaseConnection = "Error connecting to Database";
});
// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
    console.log("Connected to Database");
    databaseConnection = "Connected to Database";
});

// Route for store
router.route('/add').post( (req, res) => {
  let todos = new Todos(req.body);

  console.log(req.body);

  todos.save()
    .then(todos => {
      res.status(200).json({'todos': 'todos are being added'});
    })
    .catch(err => {
      res.status(400).send("unable to save");
    });
});


// Get data route (listening)
router.route('/').get((req, res) => {
  Todos.find(function (err, todos) {
    console.log(Todos)
    if(err){
      console.log(err)
      console.log(todos)
    }
    else {
      console.log(todos)
      res.json(todos);
    }
  });
});




module.exports = router;
