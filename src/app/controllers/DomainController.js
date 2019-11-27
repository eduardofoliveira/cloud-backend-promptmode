import Domain from '../models/Domain'

class DomainController {
  async index (req, res) {
    try {
      const dominios = await Domain.findAll({
        order: [['dominio', 'ASC']]
      })
      return res.json(dominios)
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao lista dominios' })
    }
  }

  async show (req, res) {
    try {
      const { id } = req.params
      const dominio = await Domain.findByPk(id)

      if (!dominio) {
        return res.status(404).json({ error: 'Dominio não encontrado' })
      }

      return res.json(dominio)
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao buscar dominio' })
    }
  }

  async store (req, res) {
    try {
      const existe = await Domain.findOne({
        where: {
          dominio: req.body.dominio
        }
      })

      if (existe) {
        return res.status(400).json({ error: 'Dominio já existe' })
      }

      const dominio = await Domain.create(req.body)
      return res.json(dominio)
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao salvar dominio' })
    }
  }

  async update (req, res) {
    try {
      const { id } = req.params
      let dominio = await Domain.findByPk(id)

      if (!dominio) {
        return res.status(404).json({ error: 'Dominio não encontrado' })
      }

      const existe = await Domain.findOne({
        where: {
          dominio: req.body.dominio
        }
      })

      if (existe) {
        return res.status(400).json({ error: 'Dominio já existe' })
      }

      dominio = await dominio.update({
        dominio: req.body.dominio
      })

      return res.json(dominio)
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao atualizar dominio' })
    }
  }

  async destroy (req, res) {
    try {
      const { id } = req.params
      const dominio = await Domain.findByPk(id)

      if (!dominio) {
        return res.status(404).json({ error: 'Dominio não encontrado' })
      }

      await dominio.destroy()
      return res.json({ message: 'Dominio deletado' })
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao deletar dominio' })
    }
  }
}

export default new DomainController()
