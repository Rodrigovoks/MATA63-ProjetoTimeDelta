const { companies } = require("../database");
const { v4: uuidv4 } = require("uuid");

function create(jobOpportunity, companyId) {
  jobOpportunity.id = uuidv4();

  const company = companies.filter(({ id }) => {
    return id === companyId;
  })[0];

  const index = companies.indexOf(company);

  company.jobOpportunities.push(jobOpportunity);

  companies[index] = company;

  return company;
}

module.exports = { create };
