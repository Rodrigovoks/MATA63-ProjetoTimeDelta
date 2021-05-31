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
  let database = getDatabase();
  database["Vagas"].push(vaga);
  saveDatabase(database);

  return vaga;
}

module.exports = { create, getAll };
