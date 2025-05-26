// https://www.youtube.com/watch?v=mbsmsi7l3r4

require("dotenv").config();

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

// mock database
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

let refreshTokens = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhdGh1bCIsImlhdCI6MTc0ODI0NDYxNn0.t2ZbJBdN_UmNDQTpkoJx64crRD_5z4PPmmolYVCXqNU",
];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = {
    username: username,
  };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  res.json({
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
});

app.post("/token", (req, res) => {
  const refreshToken = req.body.refresh_token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ username: user.username });
    res.json({
      accessToken: accessToken,
    });
  });
});

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.username));
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
}

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
