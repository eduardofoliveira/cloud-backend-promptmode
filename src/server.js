import dotenv from 'dotenv'
dotenv.config()
// eslint-disable-next-line import/first
import app from './app'

const port = process.env.PORT || 80

app.listen(port, () => {
  process.stdout.write(`WebService Running at port ${port}\r\n`)
})
