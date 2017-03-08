const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err,salt) => {
//   bcrypt.hash(password, salt, (er,hash) =>{
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$N83UlL.7C8X1kzaRj4vYIerAYD7F0XcFvUlxbeMr3kAPltvk6WkNO';

bcrypt.compare(password, hashedPassword, (err,res)=>{
  console.log(res);
});

//
// var data = {
//   id:10
// };
//
// var token = jwt.sign(data,'123abc');
// console.log(token);
//
// var decoded = jwt.verify(token , '123bc');
// console.log(decoded);

//
// // var message = 'I am user number 3';
// // var hash = SHA256(message).toString();
// //
// // console.log(`Message: ${message}`);
// // console.log(`HAsh: ${hash}`);
// //
// // var data = {
// //   id: 4
// // };
// // var token = {
// //   data: data,
// //   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// // }
