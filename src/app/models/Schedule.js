import Sequelize, { Model } from 'sequelize'

class Schedule extends Model {
  static init (sequelize) {
    super.init(
      {
        did: Sequelize.STRING,
        destino: Sequelize.STRING,
        dia_semana: Sequelize.INTEGER,
        hora: Sequelize.INTEGER,
        minuto: Sequelize.INTEGER
      }, {
        sequelize,
        tableName: 'programacoes',
        timestamps: false
      }
    )

    return this
  }

  static associate (models) {
    this.belongsTo(models.Domain, { foreignKey: 'fk_id_dominio' })
  }
}

export default Schedule
