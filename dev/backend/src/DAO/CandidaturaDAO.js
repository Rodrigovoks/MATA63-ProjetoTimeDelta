const { getDatabase, saveDatabase } = require("../database.js");
const { v4: uuidv4 } = require("uuid");

function insereCandidatura(candidatura) {
    candidatura.id = uuidv4();
    candidatura.status = "Candidato";
    let database = getDatabase();
    database["Candidaturas"].push(candidatura);
    saveDatabase(database);
  
    return canditatura;
  }

function atualizaStatus(id, novoStatus){
    let database = getDatabase();
    let candidatura = database["Candidaturas"].find(element => element.id == id);
    candidatura.status = novoStatus;
    saveDatabase(database);
}

function buscaCandidatura(){
    let database = getDatabase();
    return database["Candidaturas"];
}

function buscaCandidaturasByPessoa(idPessoa){
    let database = getDatabase();
    return database["Candidaturas"].filter(element => element.idPessoa == idPessoa);
}

module.exports = {
    insereCandidatura,
    atualizaStatus,
    buscaCandidatura,
    buscaCandidaturasByPessoa,
  };