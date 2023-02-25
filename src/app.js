const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const apiRoutes = require("../src/routes/api");

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);

app.use((req, res) => {
  res.status(404);
  res.json({ error: "endpoint não encontrado" });
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
