const { request } = require("express");
const { create, getAll } = require("../DAO/EmpresasDAO");
const VagasDAO = require("../DAO/VagasDAO");

function insertCompany(req, res) {
  const { name, email, area, password } = req.body;
  res.json(create({ name, email, area, password }));
}

function getAllCompanies(_, res) {
  res.json(getAll());
}

function announceJobOpportunity(req, res) {
  const { role, level, wage, companyId } = req.body;
  res.json(VagasDAO.create({ role, level, wage, companyId }));
}

module.exports = { insertCompany, getAllCompanies, announceJobOpportunity };
