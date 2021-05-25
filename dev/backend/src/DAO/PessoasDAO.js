const { v4: uuidv4 } = require("uuid");
const { getDatabase } = require("../database.js");

function buscaPessoas(nomeParcial=null)
{
    let pessoas = getDatabase()["Pessoas"];

    if(nomeParcial != null)
    {
        return pessoas.filter((pessoa)=>{
            return pessoa['nome'].includes(nomeParcial);
        });
    }

    return pessoas;
}

function inserePessoa(pessoa) 
{
    pessoa.id = uuidv4();
    getDatabase["Pessoas"].push(pessoa);
}

module.exports = {buscaPessoas, inserePessoa};