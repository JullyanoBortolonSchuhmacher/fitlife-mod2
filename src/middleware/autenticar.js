const jwt = require('jsonwebtoken')

const autenticar = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ erro: 'Token inválido' })
    }

    req.userId = decoded.id
    req.userEmail = decoded.email
    next()
  })
}

module.exports = autenticar
