import app from './app'

require('dotenv').config()

const port = process.env.PORT || 80

app.listen(port, () => {
  process.stdout.write(`WebService Running at port ${port}\r\n`)
})
