const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
// Todo.findByIdAndRemove('58bcdaa8ecb5546fcb53bf6d').then((todo) => {
//   console.log(todo);
// });
//
// Todo.findByIdAndRemove('58bcdaa8ecb5546fcb53bf6d').then((todo) => {
//   console.log(todo);
// })
