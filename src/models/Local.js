const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Local = connection.define('locais', {
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    defaultValue: "Não Inserido"
  },
  endereco: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  geoCoords: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  outro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  criadoEm: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {

  timestamps: true,
  createdAt: 'criadoEm',
  updatedAt: false,
  paranoid: true
})

module.exports = Local