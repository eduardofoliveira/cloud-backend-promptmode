import User from '../models/User'

class UserController {
  async index (req, res) {
    try {
      const usuarios = await User.findAll({
        attributes: ['id', 'nome', 'email']
      })
      return res.json(usuarios)
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao listar usuários' })
    }
  }

  async show (req, res) {
    try {
      const { id } = req.params
      const usuario = await User.findByPk(id, { attributes: ['id', 'nome', 'email'] })

      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

      return res.json(usuario)
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao buscar usuário' })
    }
  }

  async store (req, res) {
    try {
      const { id, nome, email } = await User.create(req.body)
      return res.json({ id, nome, email })
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao salvar usuário' })
    }
  }

  async update (req, res) {
    try {
      const { id } = req.params
      const usuario = await User.findByPk(id)

      if (req.body.password_hash) {
        const { id, nome, email } = await usuario.update({
          nome: req.body.nome,
          email: req.body.email,
          password_hash: req.body.password_hash
        })
        return res.json({ id, nome, email })
      } else {
        const { id, nome, email } = await usuario.update({
          nome: req.body.nome,
          email: req.body.email
        })
        return res.json({ id, nome, email })
      }
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao atualizar usuário' })
    }
  }

  async destroy (req, res) {
    try {
      const { id } = req.params
      const usuario = await User.findByPk(id)

      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

      await usuario.destroy()
      return res.json({ message: 'Usuário deletado' })
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao deletar usuário' })
    }
  }
}

export default new UserController()
