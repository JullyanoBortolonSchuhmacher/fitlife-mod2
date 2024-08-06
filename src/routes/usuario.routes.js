// src/routes/usuario.routes.js

const express = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const autenticar = require('../middleware/autenticar')

const router = express.Router()

/**
 * @swagger
 * /:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: ARTUR
 *               sexo:
 *                 type: string
 *                 example: Masculino
 *               cpf:
 *                 type: string
 *                 example: 987.622.001-00
 *               endereco:
 *                 type: object
 *                 properties:
 *                   rua:
 *                     type: string
 *                     example: Avenida Brasil
 *                   numero:
 *                     type: string
 *                     example: 456
 *                   bairro:
 *                     type: string
 *                     example: Centro
 *                   cidade:
 *                     type: string
 *                     example: Florianópolis
 *                   estado:
 *                     type: string
 *                     example: SC
 *                   cep:
 *                     type: string
 *                     example: 88080-030
 *               email:
 *                 type: string
 *                 example: artur@exemplo.com
 *               senha:
 *                 type: string
 *                 example: 123123
 *               dataNascimento:
 *                 type: string
 *                 format: date
 *                 example: 1992-02-02
 *               criadoEm:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-08-05T00:00:00Z
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.post('/', UsuarioController.cadastra)

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nome:
 *                     type: string
 *                     example: ARTUR
 *                   sexo:
 *                     type: string
 *                     example: Masculino
 *                   cpf:
 *                     type: string
 *                     example: 987.622.001-00
 *                   endereco:
 *                     type: object
 *                     properties:
 *                       rua:
 *                         type: string
 *                         example: Avenida Brasil
 *                       numero:
 *                         type: string
 *                         example: 456
 *                       bairro:
 *                         type: string
 *                         example: Centro
 *                       cidade:
 *                         type: string
 *                         example: Florianópolis
 *                       estado:
 *                         type: string
 *                         example: SC
 *                       cep:
 *                         type: string
 *                         example: 88080-030
 *                   email:
 *                     type: string
 *                     example: artur@exemplo.com
 *                   senha:
 *                     type: string
 *                     example: 123123
 *                   dataNascimento:
 *                     type: string
 *                     format: date
 *                     example: 1992-02-02
 *                   criadoEm:
 *                     type: string
 *                     format: date-time
 *                     example: 2024-08-05T00:00:00Z
 *       500:
 *         description: Erro no servidor
 */
router.get('/', UsuarioController.lista)

module.exports = router
