const Usuario = require('../models/Usuario');

class UsuarioController {
  async cadastra(req, res) {
    console.log('Recebendo requisição para criar usuário:', req.body);
    try {
      const dados = req.body;
      const usuario = await Usuario.create(dados);
      console.log('Usuário criado com sucesso:', usuario);
      return res.status(201).json(usuario);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({ erro: 'Erro ao criar usuário', error });
    }
  }

  async lista(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.status(200).json(usuarios);
    } catch (error) {
      console.error('Erro ao listar usuários:', error);
      return res.status(500).json({ erro: 'Erro ao listar usuários', error });
    }
  }

  async listaId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }
      return res.status(200).json(usuario);
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      return res.status(500).json({ erro: 'Erro ao buscar usuário por ID', error });
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
      console.error('Erro ao deletar usuário:', error)
      return res.status(500).json({ erro: 'Erro ao deletar usuário', error })
    }
  }
}

module.exports = UsuarioController;