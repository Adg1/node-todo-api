var mongoose = require('mongoose');
var {MONGODB_URI} = require('./config')

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
