const Local = require('../models/Local')

class LocalController {
  async cadastra(req, res) {
    console.log('Recebendo requisição para criar local:', req.body)
    try {
      const dados = req.body

      // Criptografar a senha antes de salvar o usuário
      if (dados.senha) {
        const salt = await bcrypt.genSalt(10)
        dados.senha = await bcrypt.hash(dados.senha, salt)
      }

      const local = await Local.create(dados)
      console.log('Local criado com sucesso:', local)
      return res.status(201).json(local)
    } catch (error) {
      console.error('Erro ao criar local:', error)
      return res.status(500).json({ erro: 'Erro ao criar local', error })
    }
  }

  async lista(req, res) {
    try {
      const locais = await Local.findAll()
      return res.status(200).json(locais)
    } catch (error) {
      console.error('Erro ao listar locais:', error)
      return res.status(500).json({ erro: 'Erro ao listar locais', error })
    }
  }

  async listaId(req, res) {
    try {
      const { id } = req.params
      const local = await Local.findByPk(id)
      if (!local) {
        return res.status(404).json({ erro: 'Local não encontrado' })
      }
      return res.status(200).json(local)
    } catch (error) {
      console.error('Erro ao buscar local por ID:', error)
      return res.status(500).json({ erro: 'Erro ao buscar local por ID', error })
    }
  }

  async deleta(req, res) {
    try {
      const { id } = req.params
      const local = await Local.findByPk(id)
      if (!local) {
        return res.status(404).json({ erro: 'Local não encontrado' })
      }
      await Local.destroy()
      return res.status(200).json({ mensagem: 'Local deletado com sucesso' })
    } catch (error) {
      console.error('Erro ao deletar local:', error)
      return res.status(500).json({ erro: 'Erro ao deletar local', error })
    }
  }
}

module.exports = new LocalController()