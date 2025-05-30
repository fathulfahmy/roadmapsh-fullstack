// https://www.youtube.com/watch?v=Oe421EPjeBE

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // method 1
    res.write("<h1>Home page</h1>");
    res.end();

    // method 2
    // res.end('<h1>home page</h1>')
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(8000);
