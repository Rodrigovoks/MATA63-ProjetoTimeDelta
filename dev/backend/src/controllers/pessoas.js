const { buscaPessoas, inserePessoa } = require("../DAO/PessoasDAO");

function cInserePessoa(req, res) {
  const { name, email, password, documentNumber } = req.body;
  res.json(
    inserePessoa({
      name,
      email,
      password,
      documentNumber
    })
  );
}

function cBuscaPessoa(req, res) {
  res.json(buscaPessoas());
}

module.exports = { cInserePessoa, cBuscaPessoa };
