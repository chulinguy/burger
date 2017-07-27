const orm = require("../config/orm.js");

var burger = {};
burger.all = (cb) => {
  orm.selectAll("burgers", (res) => {
    cb(res);
  });
}

burger.create = (cols, vals, cb) => {
  orm.insertOne("burgers", cols, vals, (res) => {
    cb(res);
  });
}

burger.update = (CVobj, condition, cb) => {
  orm.updateOne("burgers", CVobj, condition, (res) => {
    cb(res);
  });
}
burger.delete = (cols, vals, cb) => {
  orm.deleteOne("burgers", cols, vals, (res) => {
    cb(res);
  })
}

module.exports = burger;