const { request } = require("express");
const { create, getAll } = require("../DAO/VagasDAO");

function announceJobOpportunity(req, res) {
  const { role, level, wage, companyId } = req.body;
  res.json(create({ role, level, wage, companyId }));
}

function getAllOpportunities(req, res) {
  res.json(getAll());
}

module.exports = { announceJobOpportunity, getAllOpportunities };
