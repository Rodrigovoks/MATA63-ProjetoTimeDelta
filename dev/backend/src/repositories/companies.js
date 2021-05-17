const { companies } = require("../database");
const { v4: uuidv4 } = require("uuid");

function create(company) {
  company.id = uuidv4();
  company.jobOpportunities = [];
  companies.push(company);

  return company;
}

function getAll() {
  return companies;
}

function createJobOpportunity(jobOpportunity, companyId) {
  jobOpportunity.id = uuidv4();

  const company = companies.filter(({ id }) => {
    return id === companyId;
  })[0];

  return company;
}

module.exports = { create, getAll, createJobOpportunity };
