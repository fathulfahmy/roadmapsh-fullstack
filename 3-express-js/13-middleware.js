const express = require("express");
const morgan = require("morgan");
const { logger, authorize } = require("./12-logger-authorize.js");

const app = express();

// global middleware
app.use(logger);
app.use([logger, authorize]);
app.use(morgan("tiny"));

// middleware for /api*
app.use("/api", logger);
app.use("/api", [logger, authorize]);

app.get("/", (req, res) => {
  res.send("About");
});

app.get("/api/about", (req, res) => {
  res.send("About");
});

// middleware for /products
app.get("/products", logger, (req, res) => {
  res.send("Products");
});
app.get("/products", [logger, authorize], (req, res) => {
  res.send("Products");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
