const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to out homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Oops</h1><p>We can't seem to find page you are looking for</p><a href="/">Go back</a>`);
});

server.listen(8000);
