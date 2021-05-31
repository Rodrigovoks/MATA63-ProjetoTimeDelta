const { create, getAll } = require("../DAO/EmpresasDAO");

function insertCompany(req, res) {
  const { name, email, area, password } = req.body;
  res.json(create({ name, email, area, password }));
}

function getAllCompanies(_, res) {
  res.json(getAll());
}

function announceJobOpportunity(req, res) {
  const jobOpportunity = JobOpportunityRepository.create(
    req.body,
    req.params.companyId
  );

  res.json(jobOpportunity);
}

module.exports = { insertCompany, getAllCompanies };
