'use strict';

const express = require('express');
const router = express.Router();
const Todos = require('../models/db');

router.get('/', function(req, res, next) {
    res.send('API is working properly');
    Todos.find(function (err, todos) {
    console.log(Todos)
    if(err){
      console.log(err)
      // console.log(todos)
    }
    else {
      // console.log(todos)
      res.json(Todos);
    }
  });
});
module.exports = router;
