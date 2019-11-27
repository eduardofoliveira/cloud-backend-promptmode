/* eslint-disable camelcase */
import Schedule from '../models/Schedule'

class ScheduleController {
  async index (req, res) {
    const schedules = await Schedule.findAll({})
    return res.json(schedules)
  }

  async show (req, res) {
    const { id } = req.params
    const schedule = await Schedule.findByPk(id)

    if (!schedule) {
      return res.status(404).json({ error: 'Programação não encontrada' })
    }

    return res.json(schedule)
  }

  async store (req, res) {
    const schedule = await Schedule.create(req.body)
    return res.json(schedule)
  }

  async update (req, res) {
    const { id } = req.params
    let schedule = await Schedule.findByPk(id)

    if (!schedule) {
      return res.status(404).json({ error: 'Programação não encontrada' })
    }

    const { did, destino, dia_semana, hora, minuto } = req.body
    schedule = await schedule.update({
      did, destino, dia_semana, hora, minuto
    })

    return res.json(schedule)
  }

  async destroy (req, res) {
    const { id } = req.params
    const schedule = await Schedule.findByPk(id)

    if (!schedule) {
      return res.status(404).json({ error: 'Programação não encontrada' })
    }

    await schedule.destroy()
    return res.json({ message: 'Programação removida' })
  }
}

export default new ScheduleController()
