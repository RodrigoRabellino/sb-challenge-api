const { faker } = require("@faker-js/faker");
const { User } = require("../db/connection");
faker.locale = "es";

module.exports = async () => {
  const users = [];
  for (let i = 0; i < 5; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email(
      firstName,
      lastName + i,
      "sbchallenge.com"
    );
    let password = "1234";

    users.push({ firstName, lastName, email, password });
  }
  await User.bulkCreate(users);
  console.log("[Database] users seeders ok");
};
