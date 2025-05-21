const express = require("express");

const app = express();

const { products } = require("./8-data");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
