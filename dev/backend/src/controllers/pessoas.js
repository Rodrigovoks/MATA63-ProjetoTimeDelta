const { buscaPessoas, inserePessoa } = require("../DAO/PessoasDAO");

function cInserePessoa(req, res) {
  const { nome, email, senha } = req.body;
  res.json(
    inserePessoa({
      nome,
      email,
      senha,
    })
  );
}

function cBuscaPessoa(req, res) {
  res.json(buscaPessoas());
}

module.exports = { cInserePessoa, cBuscaPessoa };
