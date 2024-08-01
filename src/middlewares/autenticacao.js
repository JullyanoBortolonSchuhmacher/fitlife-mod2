const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1] // Espera que o token seja passado no formato "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ erro: 'Token inválido', error })
  }
}
