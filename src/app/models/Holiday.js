import Sequelize, { Model } from 'sequelize'

class Holiday extends Model {
  static init (sequelize) {
    super.init(
      {
        did: Sequelize.STRING,
        destino: Sequelize.STRING,
        destino_pos: Sequelize.STRING,
        inicio: Sequelize.DATE,
        fim: Sequelize.DATE
      },
      {
        sequelize,
        tableName: 'feriados',
        timestamps: false
      }
    )

    return this
  }

  static associate (models) {
    this.belongsTo(models.Domain, { foreignKey: 'fk_id_dominio' })
  }
}

export default Holiday
