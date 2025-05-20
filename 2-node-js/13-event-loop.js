const { readFile } = require("fs");

console.log("started a first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");

// ==============================

console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");

// ==============================

setInterval(() => {
  console.log("hello world");
}, 2000);

console.log("I will run first");

// ==============================
// compare to example above

const http = require("http");

// hello world
const server1 = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});

// I will run first
server.listen(8000, () => {
  console.log("Server listening on port: 8000");
});

// ==============================

const http = require("http");

const server2 = http.createServer((req, res) => {
  if (req.url === "/") {
    // first
    res.end("Home page");
  }
  if (req.url === "/about") {
    // third (unwanted behavior)
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    // second
    res.end("About page");
  }
});

server.listen(8000, () => {
  console.log("Server listening on port 8000...");
});

// ==============================

const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    // const first = await getText("./content/first.txt");
    // const second = await getText("./content/second.txt");
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise("./content/result-mind-grenade.txt", `THIS IS AWESOME: ${first} ${second}`, { flag: "a" });
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
