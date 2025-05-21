const express = require("express");
const router = express.Router();
const { users } = require("../8-data.js");

const registerUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Name is required" });
  }
  res.status(201).json({ success: true, data: name });
};

module.exports = {
  registerUser,
};
