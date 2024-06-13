const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Artista = sequelize.define('Artista', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nacionalidade: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Artista;
