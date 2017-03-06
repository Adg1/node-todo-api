var mongoose = require('mongoose');
var {MONGODB_URI} = require('./config')

mongoose.Promise = global.Promise;
if(!process.env.PORT) {
  MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}
mongoose.connect( MONGODB_URI);

module.exports = {
  mongoose
};
