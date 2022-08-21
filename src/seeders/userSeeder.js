const { faker } = require("@faker-js/faker");
const { User } = require("../db/connection");
faker.locale = "es";

module.exports = async () => {
  const users = [];
  for (let i = 0; i < 5; i++) {
    let username = faker.internet.userName();
    let email = faker.internet.exampleEmail(username + i);
    let password = "1234";

    users.push({ username, email, password });
  }
  await User.bulkCreate(users, { individualHooks: true });
  console.log("[Database] users seeders ok");
};
