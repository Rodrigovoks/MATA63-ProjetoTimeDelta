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

function inserePessoa(pessoa) {
  pessoa.id = uuidv4();
  let database = getDatabase();
  database["Pessoas"].push(pessoa);
  saveDatabase(database);

  return pessoa;
}

function getUserById(id) {
  let pessoas = getDatabase()["Pessoas"];

  let pessoa = pessoas.filter((pessoa) => {
    return pessoa["id"] === id;
  });

  return pessoa[0];
}

module.exports = { buscaPessoas, inserePessoa, getUserById };
