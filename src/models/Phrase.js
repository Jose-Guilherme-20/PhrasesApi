const sequelize = require("sequelize");
const db = require("../instances/pg");

const Phrase = db.define(
  "phrases",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: sequelize.DataTypes.INTEGER,
    },
    author: {
      type: sequelize.DataTypes.STRING,
    },
    txt: {
      type: sequelize.DataTypes.STRING,
    },
  },
  {
    tableName: "phrases",
    timestamps: false,
  }
);
module.exports = Phrase;
