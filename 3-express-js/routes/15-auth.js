const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/14-auth");

router.post("/signup", registerUser);

module.exports = router;
