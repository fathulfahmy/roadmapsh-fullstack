const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./2-index.html"));
});

app.all("/{*any}", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
