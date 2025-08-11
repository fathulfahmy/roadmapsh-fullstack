import express from "express";
import cors from "cors";
import router from "./routes/router.js";

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
