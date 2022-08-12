const { faker } = require("@faker-js/faker");
const { Tutorial } = require("../db/connection");
faker.locale = "es";

module.exports = async () => {
  const tutorials = [];
  const videoUrl = "https://youtu.be/dQw4w9WgXcQ?t=43";
  for (let i = 0; i < 10; i++) {
    let title = faker.random.words(faker.mersenne.rand(2, 5));
    let description = faker.random.words(faker.mersenne.rand(50, 100));
    let publishedStatus = true;
    let userId = faker.mersenne.rand(2, 5);

    tutorials.push({ title, description, videoUrl, publishedStatus, userId });
  }
  await Tutorial.bulkCreate(tutorials);
  console.log("[Database] tutorials seeders ok");
};
