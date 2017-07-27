const connection = require("./connection.js");
var orm = {};

orm.selectAll = (table, cb) => {
  connection.query(`SELECT * FROM ${table}`, (err, data) => {
    if (err) throw err;
    cb(data)
  })
};

orm.insertOne = (table, cols, vals, cb) => {
  var questionMarks = Array.from(new Array(vals.length), (v) => ('?')).toString();
  console.log(questionMarks);
  connection.query(`INSERT INTO ${table} (${cols}) values (${questionMarks})`, [vals], (err, data) => {
    if (err) throw err;
    cb(data)
  })
};

orm.updateOne = (table, CVobj, condition, cb) => {
  connection.query(`UPDATE ${table} SET ? WHERE ${condition}`, CVobj, (err, data) => {
    if (err) throw err;
    cb(data)
  })
};

orm.deleteOne = (table, col, val, cb) => {
   connection.query(`DELETE from ${table} WHERE ${col} = ${val}`, (err, data) => {
    if (err) throw err;
    cb(data)
  })
};

module.exports = orm;