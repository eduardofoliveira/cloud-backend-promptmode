import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'
import User from '../models/User'

class SessionController {
  async store (req, res) {
    const { email, senha } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' })
    }

    if (!(await user.checkPassword(senha))) {
      return res.status(401).json({ error: 'Senha incorreta' })
    }

    const { id, nome } = user

    return res.json({
      user: {
        id,
        nome,
        email
      },
      token: jwt.sign({ id, nome, email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionController()
