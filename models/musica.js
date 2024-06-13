const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Musica = sequelize.define('Musica', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Musica;
