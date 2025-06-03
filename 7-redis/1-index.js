const express = require("express");
const redis = require("redis");

const app = express();

const PORT = process.env.PORT || 8000;

let client;

async function start() {
  client = await redis
    .createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  app.listen(8000, () => {
    console.log(`App listening on port ${PORT}`);
  });
}
start();

function setResponse(username, repos) {
  return `<h2>${username} has ${repos} Github repos</h2>`;
}

async function getRepos(req, res, next) {
  try {
    const { username } = req.params;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const repos = data.public_repos;

    await client.set(username, repos, {
      EX: 3600,
    });

    console.log("Data fetched from api");
    res.status(200).send(setResponse(username, repos));
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

async function cache(req, res, next) {
  const { username } = req.params;

  const repos = await client.get(username);

  if (repos !== null) {
    console.log("Data fetched from redis");
    res.status(200).send(setResponse(username, repos));
  } else {
    next();
  }
}

app.get("/repos/:username", cache, getRepos);
