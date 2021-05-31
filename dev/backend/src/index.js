const express = require("express");
const { cInserePessoa, cBuscaPessoa } = require("./controllers/pessoas");
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
