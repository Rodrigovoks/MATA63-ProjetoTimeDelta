const { v4: uuidv4 } = require("uuid");
const { getDatabase, saveDatabase } = require("../database.js");

function buscaPessoas(nomeParcial = null) {
  let pessoas = getDatabase()["Pessoas"];

  if (nomeParcial != null) {
    return pessoas.filter((pessoa) => {
      return pessoa["nome"].includes(nomeParcial);
    });
  }

  return pessoas;
}

function create(company) {
  company.id = uuidv4();
  let database = getDatabase();
  database["Empresas"].push(company);
  saveDatabase(database);

  return company;
}

module.exports = { create };
