import Sequelize, { Model } from 'sequelize'

class Domain extends Model {
  static init (sequelize) {
    super.init(
      {
        dominio: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'dominios',
        timestamps: false
      }
    )

    return this
  }
}

export default Domain
