module.exports = {
  dialect: 'mariadb',
  host: '35.171.122.245',
  username: 'root',
  password: '190790edu',
  database: 'promptmode',
  logging: console.log,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  dialectOptions: {
    socketPath: `${process.env.SOCKET_PATH}` || undefined,
    timezone: 'Etc/GMT-3'
  },
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
}
