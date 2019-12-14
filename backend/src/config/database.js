// conexão mongo
const mongoose = require('mongoose')
mongoose.Promise = global.Promise //para tirar a advertencia da API Promise, por estar desatualizada
module.exports = mongoose.connect('mongodb://localhost/todo')


// const mysql = require('mysql')
// class ConexaoBD {
//   static connect(){
//     const conn = mysql.createConnection({
//     host:     'localhost',
//     user:     'root',
//     password: 'root',
//     database: 'db_todoapp'
//   })
//   conn.connect();
//   return conn;
// }

