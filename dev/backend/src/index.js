const express = require("express");
const { cInserePessoa, cBuscaPessoa } = require("./controllers/pessoas");
const { cInsereCandidatura, cBuscaCandidatura, cAtualizaCandidatura } = require("./controllers/candidaturas");
const { insertCompany, getAllCompanies } = require("./controllers/companies");
const {
  announceJobOpportunity,
  getAllOpportunities,
  attachUserToOpportunity,
} = require("./controllers/opportunities");

const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "koe" });
});

app.get("/pessoas", cBuscaPessoa);
app.post("/pessoas", cInserePessoa);

app.get("/empresas", getAllCompanies);
app.post("/empresas", insertCompany);

app.get("/vagas", getAllOpportunities);
app.post("/vagas", announceJobOpportunity);

app.get("/candidaturas", cBuscaCandidatura);
app.post("/candidaturas", cInsereCandidatura);

app.patch("/vagas/candidatar", attachUserToOpportunity);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
