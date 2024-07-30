const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')

class UsuarioController {

  async validarDados(dados) {
    const { nome, sexo, cpf, endereco, email, senha, dataNascimento } = dados

    if (!nome) { return { status: 400, mensagem: 'Nome é obrigatório' } }
    if (!sexo) { return { status: 400, mensagem: 'Sexo é obrigatório' } }
    if (!cpf) { return { status: 400, mensagem: 'CPF é obrigatório' } }
    if (!endereco) { return { status: 400, mensagem: 'Endereco é obrigatório' } }
    if (!email) { return { status: 400, mensagem: 'Email é obrigatório' } }
    if (!(senha?.length >= 8)) { return { status: 400, mensagem: 'Senha deve conter pelo menos 8 dígitos' } }
    if (!dataNascimento) { return { status: 400, mensagem: 'DataNascimento é obrigatória' } }

    // Verifica o CPF
    const cpfJaExiste = await Usuario.findOne({ where: { cpf } })
    if (cpfJaExiste) {
      return { status: 409, mensagem: 'CPF já cadastrado' }
    }

    // Verifica o email
    const emailJaExiste = await Usuario.findOne({ where: { email } })
    if (emailJaExiste) {
      return { status: 409, mensagem: 'Email já cadastrado' }
    }

    return null
  }

  async lista(req, res) {
    try {
      const usuarios = await Usuario.findAll()
      return res.status(200).json(usuarios)
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar usuários' })
    }
  }

  async listaId(req, res) {
    try {
      const { id } = req.params
      const usuario = await Usuario.findByPk(id)
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' })
      }
      return res.status(200).json(usuario)
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar usuário' })
    }
  }

  async cadastra(req, res) {
    try {
      const dados = req.body

      const validacao = await this.validarDados(dados)
      if (validacao) {
        return res.status(validacao.status).json({ erro: validacao.mensagem })
      }

      // Criptografar a senha
      const senha_hash = await bcrypt.genSalt(10)
      dados.senha = await bcrypt.hash(dados.senha, senha_hash)

      const usuario = await Usuario.create(dados)
      return res.status(201).json(usuario)
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar usuário' })
    }
  }

  async atualiza(req, res) {
    try {
      const { id } = req.params
      const dados = req.body

      const usuario = await Usuario.findByPk(id)
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' })
      }

      const validacao = await this.validarDados(dados)
      if (validacao) {
        return res.status(validacao.status).json({ erro: validacao.mensagem })
      }

      if (dados.senha) {
        const senha_hash = await bcrypt.genSalt(10)
        dados.senha = await bcrypt.hash(dados.senha, senha_hash)
      }

      await usuario.update(dados)
      return res.status(200).json(usuario)
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao atualizar usuário' })
    }
  }

  async deleta(req, res) {
    try {
      const { id } = req.params
      const usuario = await Usuario.findByPk(id)
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' })
      }
      await usuario.destroy()
      return res.status(200).json({ mensagem: 'Usuário deletado com sucesso' })
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao deletar usuário' })
    }
  }
}

module.exports = new UsuarioController()