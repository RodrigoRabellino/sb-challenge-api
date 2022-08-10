const { Tutorial, User } = require("../db/connection");
const validUrl = require("valid-url");

const index = async (req, res) => {
  try {
    const tutorials = await Tutorial.findAll({
      include: { attributes: ["firstName", "lastName"], model: User },
      order: [["CreatedAt", "ASC"]],
    });
    res.status(200).json(tutorials);
  } catch (error) {
    console.log("error index tutorials", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const tutorial = await Tutorial.findByPk(id, {
      include: { attributes: ["firstName", "lastName"], model: User },
    });
    res.status(200).json(tutorial);
  } catch (error) {
    console.log("error show tutorial", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const store = async (req, res) => {
  let { title, description, videoUrl, publishedStatus, userId } = req.body;

  if (!validUrl.isWebUri(videoUrl)) {
    return res.status(400).json({ message: "videoUrl not valid" });
  }

  try {
    const tutorial = await Tutorial.create({
      title,
      description,
      videoUrl,
      publishedStatus,
      userId,
    });
    res.status(201).json(tutorial);
  } catch (error) {
    console.log("error store tutorial", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const update = async (req, res) => {
  let { title, description, videoUrl, publishedStatus, userId } = req.body;

  data = {
    title,
    description,
    videoUrl,
    publishedStatus,
    userId,
  };

  Object.keys(data).forEach((key) => {
    if (data[key] === "") delete data[key];
  });

  if (data.videoUrl && !validUrl.isWebUri(videoUrl)) {
    return res.status(400).json({ message: "videoUrl not valid" });
  }
  try {
    const tutorial = await Tutorial.update(data, {
      where: { id: req.params.id },
      new: true,
    });
    res.status(200).json(tutorial);
  } catch (error) {
    console.log("error store tutorial", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const destroy = async (req, res) => {};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
