const express = require("express");
const morgan = require("morgan");
const { users } = require("./8-data.js");
const { logger, authorize } = require("./12-logger-authorize.js");

const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const authRouter = require("./routes/15-auth.js");
const userRouter = require("./routes/16-users.js");

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
