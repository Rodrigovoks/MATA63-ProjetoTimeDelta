const fs = require('fs');
const path = require('path');
const root = path.dirname(require.main.filename);

var database = null;

// Carrega os dados do arquivo
function loadDatabase()
{
    let data = fs.readFileSync(`${root}/database.json`);
    database = JSON.parse(data);
}

// Salva no arquivo os dados
function saveDatabase()
{
    let data = JSON.stringify(database);
    fs.writeFileSync(`${root}/database.json`, data);
}

// Retorna objeto com dados
function getDatabase()
{
    if(database == null)
        loadDatabase();
    return database;
}

module.exports = {getDatabase};