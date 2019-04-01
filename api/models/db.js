const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create and define collection and schema with datatypes

let Todos = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
},{
  collection: 'todos'
});

module.exports = mongoose.model('Todos', Todos);
