const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("/{*any}", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
