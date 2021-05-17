const { users } = require("../database");
const { v4: uuidv4 } = require("uuid");

function create(user) {
  user.id = uuidv4();
  users.push(user);

  return user;
}

function getAll() {
  return users;
}

module.exports = { create, getAll };
