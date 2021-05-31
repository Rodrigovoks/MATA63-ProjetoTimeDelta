const { v4: uuidv4 } = require("uuid");
const { getDatabase, saveDatabase } = require("../database.js");

function getAll(nomeParcial = null) {
  let empresas = getDatabase()["Empresas"];

  if (nomeParcial != null) {
    return empresas.filter((pessoa) => {
      return pessoa["nome"].includes(nomeParcial);
    });
  }

  return empresas;
}

function create(company) {
  company.id = uuidv4();
  let database = getDatabase();
  database["Empresas"].push(company);
  saveDatabase(database);

  return company;
}

module.exports = { create, getAll };
