const {buscaPessoas, inserePessoa} = require("../DAO/PessoasDAO");

function cInserePessoa(req, res) 
{
    
}
  
function cBuscaPessoa(req, res) 
{
    res.json(buscaPessoas('Souza'));
}

module.exports = {cInserePessoa, cBuscaPessoa};