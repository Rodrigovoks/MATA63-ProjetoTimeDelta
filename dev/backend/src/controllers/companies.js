const CompanyRepository = require("../repositories/companies");
const JobOpportunityRepository = require("../repositories/jobopportunity");

function createCompany(req, res) {
  const company = CompanyRepository.create(req.body);

  if (company) res.json(company);
}

function getAllCompanies(_, res) {
  res.json(CompanyRepository.getAll());
}

function announceJobOpportunity(req, res) {
  const jobOpportunity = JobOpportunityRepository.create(
    req.body,
    req.params.companyId
  );

  res.json(jobOpportunity);
}

module.exports = { createCompany, getAllCompanies, announceJobOpportunity };
