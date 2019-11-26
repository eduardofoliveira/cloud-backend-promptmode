import dotenv from 'dotenv'
// eslint-disable-next-line import/first
import app from './app'
dotenv.config()
const port = process.env.PORT || 80

app.listen(port, () => {
  process.stdout.write(`WebService Running at port ${port}\r\n`)
})
