const dbPhrases = require("../models/Phrase");
const { Sequelize } = require("sequelize");
const Phrase = require("../models/Phrase");

const ping = (req, res) => {
  res.json({ pong: true });
};
const random = (req, res) => {
  let numero = Math.floor(Math.random() * 10);
  res.json({ Number: numero });
};
const nome = (req, res) => {
  let nome = req.params.nome;
  res.json({ nome: nome });
};
const createPhrase = async (req, res) => {
  let { author, txt } = req.body;

  let newPhrase = await dbPhrases.create({ author, txt });
  res.status(201);
  res.json({ id: newPhrase.id, author, txt });
};
const listAllPhrases = async (req, res) => {
  let users = await dbPhrases.findAll({});
  res.status(200);
  res.json({ users });
};
const listOnePhrase = async (req, res) => {
  let id = req.params.id;
  const user = await dbPhrases.findAll({
    where: {
      id: id,
    },
  });
  res.status(200);
  res.json({ user });
};
const updatePhrase = async (req, res) => {
  let { id } = req.params;
  let { author, txt } = req.body;

  let phrase = await dbPhrases.findByPk(id);
  if (phrase) {
    phrase.author = author;
    phrase.txt = txt;

    await phrase.save();

    res.json({ phrase });
  } else {
    res.json({ error: "frase não encontrada" });
  }
};
const deletePhrase = async (req, res) => {
  let { id } = req.params;

  await dbPhrases.destroy({
    where: { id },
  });
  res.json({});
};

const randomPhrase = async (req, res) => {
  let phrase = await dbPhrases.findOne({
    order: [Sequelize.fn("RANDOM")],
  });
  if (phrase) {
    res.json({ phrase });
  } else {
    res.json({ error: "frase não encontrada" });
  }
};

module.exports = {
  ping,
  random,
  nome,
  createPhrase,
  listAllPhrases,
  listOnePhrase,
  updatePhrase,
  deletePhrase,
  randomPhrase,
};
