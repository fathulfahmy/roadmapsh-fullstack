var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // bad - high load time

    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);

    // good - low load time
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(8000);
