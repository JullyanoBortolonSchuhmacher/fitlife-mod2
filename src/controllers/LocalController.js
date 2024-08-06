const bcrypt = require('bcryptjs')
const Local = require('../models/Local')
const { getGeoData } = require('../hooks/apiStreetMap.js')

class LocalController {
  async cadastra(req, res) {
    console.log('Recebendo requisição para criar local:', req.body)
    try {
      const dados = req.body

      if (!dados.nome || !dados.endereco || !dados.geoCoords || !dados.outro) {
        return res.status(400).json({ erro: 'Dados obrigatórios não fornecidos' })
      }

      if (dados.endereco) {
        const endereco = JSON.parse(dados.endereco)
        const geoData = await getGeoData(endereco.rua + ', ' + endereco.numero + ', ' + endereco.bairro + ', ' + endereco.cidade + ', ' + endereco.estado)
        dados.geoCoords = geoData
      }

      const localExistente = await Local.findOne({ where: { nome: dados.nome } })
      if (localExistente) {
        return res.status(409).json({ erro: 'Local já existe' })
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
      const locaisComGeo = await Promise.all(
        locais.map(async (local) => {
          const endereco = JSON.parse(local.endereco)
          if (!local.geoCoords) {
            const geoData = await getGeoData(endereco.rua + ', ' + endereco.numero + ', ' + endereco.bairro + ', ' + endereco.cidade + ', ' + endereco.estado)
            local.geoCoords = geoData
            await local.save()  
          }
          return local
        })
      )
      return res.status(200).json(locaisComGeo)
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
      await Local.destroy({ where: { id } })
      return res.status(200).json({ mensagem: 'Local deletado com sucesso' })
    } catch (error) {
      console.error('Erro ao deletar local:', error)
      return res.status(500).json({ erro: 'Erro ao deletar local', error })
    }
  }
}

module.exports = new LocalController()