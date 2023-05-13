import express from 'express'
import cors from 'cors'
import winston from 'winston'

const app = express()
const port = 3000
const { combine, label, timestamp, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

/*Logger settings*/
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'bookstore_api.log' })
  ],
  format: combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    label({ label: 'bookstore_api' }),
    myFormat
  )
})

app.use(express.json())
app.use(cors())
app.use('/',)
app.use((err, req, res, nex) => {
  logger.error(`${req.method} ${req.baseUrl} ${err.message}`)
  res.status(400).send({ error: err.message })
})

app.listen(port, console.log(`App listening on port ${port}`))