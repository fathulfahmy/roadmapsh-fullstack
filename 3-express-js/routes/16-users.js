const express = require("express");
const router = express.Router();

const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/19-users.js");

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
