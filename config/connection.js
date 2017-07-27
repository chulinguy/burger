const mysql = require("mysql");
const keys = require("../keys.js")
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: keys,
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) throw err;  
  else console.log("connected as id " + connection.threadId);
});

module.exports = connection;  