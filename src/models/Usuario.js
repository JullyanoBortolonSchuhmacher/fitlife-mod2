const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const bcrypt = require('bcryptjs')

const Usuario = connection.define('usuarios', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  endereco: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  criadoEm: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  hooks: {
    beforeSave: async (usuario, options) => {
      if (usuario.senha && usuario.changed('senha')) {
        const salt = await bcrypt.genSalt(10)
        usuario.senha = await bcrypt.hash(usuario.senha, salt)
      }
    }
  },
  timestamps: true,
  createdAt: 'criadoEm',
  updatedAt: false,
  paranoid: false
})

module.exports = Usuario