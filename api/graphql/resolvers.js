const {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("./user.resolver");
const { login } = require("./auth.resolver");

const resolvers = {
  Query: {
    //Users
    user: getUser,
    users: getUsers,
  },
  Mutation: {
    //Auth
    login,
    //Users
    addUser,
    updateUser,
    deleteUser,
  },
};

module.exports = resolvers;
