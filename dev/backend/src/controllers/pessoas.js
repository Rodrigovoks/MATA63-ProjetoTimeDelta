const { buscaPessoas, inserePessoa } = require("../DAO/PessoasDAO");

function cInserePessoa(req, res) {}

function cBuscaPessoa(req, res) {
  res.json(buscaPessoas());
}

module.exports = { cInserePessoa, cBuscaPessoa };
