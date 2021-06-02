const { request } = require("express");
const {
  create,
  getAll,
  getOpportunityById,
  attach,
} = require("../DAO/VagasDAO");
const { getUserById } = require("../DAO/PessoasDAO");

function announceJobOpportunity(req, res) {
  const { description, role, availableOpportunities, contractType, wage, companyId } = req.body;
  res.json(create({ role, description, availableOpportunities, contractType, wage, companyId }));
}

function getAllOpportunities(req, res) {
  res.json(getAll());
}

function attachUserToOpportunity(req, res) {
  const { opportunityId, userId } = req.body;
  const user = getUserById(userId);
  if (user) {
    const opportunity = getOpportunityById(opportunityId);
    if (opportunity) {
      attach(opportunityId, userId);
    }
  }
  res.json(getAll());
}

module.exports = {
  announceJobOpportunity,
  getAllOpportunities,
  attachUserToOpportunity,
};
