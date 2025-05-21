const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./2-index.html");
const homeStyle = readFileSync("./public/styles.css");
const homePhoto = readFileSync("./public/cat-photo.jpg");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  } else if (url === "/cat-photo.jpg") {
    res.writeHead(200, { "content-type": "image/jpeg" });
    res.write(homePhoto);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(8000);
