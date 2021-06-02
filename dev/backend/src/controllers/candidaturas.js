const { insereCandidatura, atualizaStatus, buscaCandidatura, buscaCandidaturasByPessoa} = require("../DAO/CandidaturaDAO");

function cInsereCandidatura(req, res) {
  const { idVaga, idPessoa} = req.body;
  res.json(
    insereCandidatura({
      idVaga, 
      idPessoa
    })
  );
}

function cBuscaCandidatura(req, res) {
  const {idPessoa} = req.body;
  if(idPessoa == null)
    res.json(buscaCandidatura());
  else 
    res.json(buscaCandidaturasByPessoa(idPessoa));
}

function cAtualizaCandidatura(req, res){
  const {id, novoStatus} = req.body;
  atualizaStatus(id, novoStatus);
}

module.exports = { cInsereCandidatura, cBuscaCandidatura, cAtualizaCandidatura };