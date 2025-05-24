const { users } = require("../8-data.js");

const getUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};

const createUser = (req, res) => {
  const { name } = req.body;

  const updatedUsers = [...users, name];

  res.status(201).json({ success: true, data: updatedUsers });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ success: false, msg: `No user with id ${id} found` });
  }

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) {
      user.name = name;
    }
    return user;
  });

  res.status(200).json({ success: true, data: updatedUser });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ success: false, msg: `No user with id ${id} found` });
  }

  const updatedUsers = users.filter((user) => user.id !== Number(id));

  res.status(200).json({ success: true, data: updatedUsers });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
