const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create and define collection and schema with datatypes

let Todo = new Schema({
  task_title: {
    type: String
  },
  task_content: {
    type: String
  },
  task_priority: {
    type: String
  },
  task_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Todo', Todo);
