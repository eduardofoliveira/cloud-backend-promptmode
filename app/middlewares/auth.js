import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import authConfig from '../../src/config/auth'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    req.user = {
      id: decoded.id,
      nome: decoded.nome,
      email: decoded.email
    }
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' })
  }

  return next()
}
