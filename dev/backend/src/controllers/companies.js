const { request } = require("express");
const { create, getAll } = require("../DAO/EmpresasDAO");
const VagasDAO = require("../DAO/VagasDAO");

function insertCompany(req, res) {
  const { name, email, documentNumber, password } = req.body;
  res.json(create({ name, email, documentNumber, password }));
}

function getAllCompanies(_, res) {
  res.json(getAll());
}

function announceJobOpportunity(req, res) {
  const { requirements, role, availableOpportunities, contractType, wage, companyId } = req.body;
  res.json(VagasDAO.create({ role, requirements, availableOpportunities, contractType, wage, companyId }));
}

module.exports = { insertCompany, getAllCompanies, announceJobOpportunity };
