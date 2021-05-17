const express = require("express");
const { createUser, getAllUsers } = require("./controllers/users");
const {
  createCompany,
  getAllCompanies,
  announceJobOpportunity,
} = require("./controllers/companies");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "koe" });
});

app.post("/users", createUser);
app.get("/users", getAllUsers);

app.post("/companies", createCompany);
app.get("/companies", getAllCompanies);

app.post("/companies/:companyId/announce", announceJobOpportunity);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
