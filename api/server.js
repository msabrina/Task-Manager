const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
// const config = require('./DB.js');
const PORT = 4000;
const app = express();

const todoRoutes = express.Router();

let Todos = require('./models/db');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/todos', todoRoutes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});


// const testDBRouter = require('./routes/testDB');


// Connect to MongoDB
mongoose.connect('mongodb://msabrina:sampleapp1@ds139847.mlab.com:39847/heroku_m7ldgwvl', { useNewUrlParser: true });
// If there is a connection error send an error message
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
});
// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
    console.log("Connected to Database");
});


// fetch all available data in our database

todoRoutes.route('/').get(function(req, res) {
  Todos.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

// get a single task

todoRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Todos.findById(id, function(err, todo) {
    res.json(todo);
  });
});

// create method; add new task in our db

todoRoutes.route('/add').post(function(req, res) {
  let todo = new Todos(req.body);
  todo.save()
    .then(todo => {
      res.status(200).json({'todo': 'todo added successfully'});
    })
    .catch(err => {
      res.status(400).send('adding new todo failed');
    });
});

// update method; edit existing task

todoRoutes.route('/update/:id').post(function(req, res) {
  Todos.findById(req.params.id, function(err, todo) {
    if (!todo)
      res.status(404).send("data is not found");
    else
      todo.task_title = req.body.task_title;
      todo.task_content = req.body.task_content;
      todo.task_priority = req.body.task_priority;
      todo.task_completed = req.body.task_completed;

      todo.save().then(todo => {
        res.json('Todo updated!');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});


// delete method; remove task from db

todoRoutes.route('/delete/:id').delete(function(req, res) {
  console.log('delete called');
  Todos.deleteOne({_id: req.params.id}, function(err, todo) {
    if(err) res.json(err);
    else res.json('Deleted');
  });
})



module.exports = app;
