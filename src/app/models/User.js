import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'usuarios'
      }
    )

    this.addHook('beforeSave', async user => {
      if (user.password_hash.length < 56) {
        user.password_hash = await bcrypt.hash(user.password_hash, 8)
      }
    })

    return this
  }

  checkPassword (password) {
    return bcrypt.compare(password, this.password_hash)
  }
}

export default User
