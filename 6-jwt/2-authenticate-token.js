// https://www.youtube.com/watch?v=mbsmsi7l3r4

require("dotenv").config();

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
  {
    username: "fathul",
    title: "Post one",
  },
  {
    username: "fahmy",
    title: "Post two",
  },
];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = {
    username: username,
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({
    accessToken: accessToken,
  });
});

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.username));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : null;

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(8000);
