const { v4: uuidv4 } = require("uuid");
const { getDatabase, saveDatabase } = require("../database.js");

function getAll(nomeParcial = null) {
  let vagas = getDatabase()["Vagas"];

  if (nomeParcial != null) {
    return vagas.filter((pessoa) => {
      return pessoa["nome"].includes(nomeParcial);
    });
  }

  return vagas;
}

function create(vaga) {
  vaga.id = uuidv4();
  vaga.candidatos = [];
  let database = getDatabase();
  database["Vagas"].push(vaga);
  saveDatabase(database);

  return vaga;
}

function getOpportunityById(id) {
  let opportunities = getDatabase()["Vagas"];

  let opportunity = opportunities.filter((opportunity) => {
    return opportunity["id"] === id;
  });

  return opportunity[0];
}

function attach(opportunityId, userId) {
  let opportunities = getDatabase()["Vagas"];

  let opportunity = opportunities.filter((opportunity) => {
    return opportunity["id"] === opportunityId;
  });
  opportunity = opportunity[0];

  console.log(opportunity);
  console.log(opportunityId);
  console.log(userId);

  const index = opportunities.indexOf(opportunity);

  console.log(index);

  if(!opportunity.candidates){
    opportunity.candidates = [];
  }

  opportunity.candidates.push(userId);

  console.log(opportunity);

  opportunities[index] = opportunity;

  let database = getDatabase();

  database["Vagas"] = opportunities;

  saveDatabase(database);

  return opportunity;
}

module.exports = {
  create,
  getAll,
  getOpportunityById,
  attach,
};
