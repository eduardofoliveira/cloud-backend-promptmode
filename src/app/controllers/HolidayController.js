/* eslint-disable camelcase */
import Holiday from '../models/Holiday'

class HolidayController {
  async index (req, res) {
    const holidays = await Holiday.findAll({})
    return res.json(holidays)
  }

  async show (req, res) {
    const { id } = req.params
    const holiday = await Holiday.findByPk(id)

    if (!holiday) {
      return res.status(404).json({ error: 'Feriado não encontrado' })
    }

    return res.json(holiday)
  }

  async store (req, res) {
    const holiday = await Holiday.create(req.body)
    return res.json(holiday)
  }

  async update (req, res) {
    const { id } = req.params
    let holiday = await Holiday.findByPk(id)

    if (!holiday) {
      return res.status(404).json({ error: 'Feriado não encontrado' })
    }

    const { did, destino, destino_pos, inicio, fim } = req.body

    holiday = await holiday.update({
      did, destino, destino_pos, inicio, fim
    })
    return res.json(holiday)
  }

  async destroy (req, res) {
    const { id } = req.params
    const holiday = await Holiday.findByPk(id)

    if (!holiday) {
      return res.status(404).json({ error: 'Feriado não encontrado' })
    }

    await holiday.destroy()
    return res.json({ message: 'Feriado deletado' })
  }
}

export default new HolidayController()
