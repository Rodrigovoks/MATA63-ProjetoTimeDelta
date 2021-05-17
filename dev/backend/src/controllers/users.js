const { create, getAll } = require("../repositories/users");

function createUser(req, res) {
  const user = create(req.body);

  delete user.password;

  if (user) res.json(user);
}

function getAllUsers(req, res) {
  res.json(getAll());
}

module.exports = { createUser, getAllUsers };
