const bcrypt = require("bcrypt");
const { USER_TABLE } = require("../models/user.model");

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(USER_TABLE, [
      {
        email: "dully123@mail.com",
        password: await bcrypt.hash("dully2006", 10),
        role: "admin",
        name: "Dully Flores",
        created_at: new Date().toUTCString(),
      },
      {
        email: "yrvin123@mail.com",
        password: await bcrypt.hash("yrvin1403", 10),
        role: "customer",
        name: "Yrvin Villanueva",
        created_at: new Date().toUTCString(),
      },
      {
        email: "dina10@mail.com",
        password: await bcrypt.hash("dina2807", 10),
        role: "customer",
        name: "Dina Flores",
        created_at: new Date().toUTCString(),
      },
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(USER_TABLE, null, {});
  },
};
