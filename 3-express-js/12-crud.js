const express = require("express");
const morgan = require("morgan");
const { users } = require("./8-data.js");
const { logger, authorize } = require("./12-logger-authorize.js");

const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/signup", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Name is required" });
  }
  res.status(201).json({ success: true, data: name });
});

app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

app.post("/api/users", (req, res) => {
  const { name } = req.body;

  const updatedUsers = [...users, name];

  res.status(201).json({ success: true, data: updatedUsers });
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ success: false, msg: `No user with id ${id} found` });
  }

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) {
      user.name = name;
    }
    return user;
  });

  res.status(200).json({ success: true, data: updatedUser });
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ success: false, msg: `No user with id ${id} found` });
  }

  const updatedUsers = users.filter((user) => user.id !== Number(id));

  res.status(200).json({ success: true, data: updatedUsers });
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
