const boom = require("@hapi/boom");
const UserService = require("../services/user.service");
const service = new UserService();

const getUser = (_, { id }) => {
  return service.findOne(id);
};

const getUsers = () => {
  return service.find({});
};

const addUser = async (_, { dto }, context) => {
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) {
    throw boom.unauthorized("You must be logged in");
  }
  return service.create(dto);
};

const updateUser = async (_, { id, dto }, context) => {
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) {
    throw boom.unauthorized("You must be logged in");
  }
  return service.update(id, dto);
};

const deleteUser = async (_, { id }, context) => {
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) {
    throw boom.unauthorized("You must be logged in");
  }
  const deleteData = await service.delete(id);
  return deleteData.id;
};

module.exports = { getUser, getUsers, addUser, updateUser, deleteUser };
