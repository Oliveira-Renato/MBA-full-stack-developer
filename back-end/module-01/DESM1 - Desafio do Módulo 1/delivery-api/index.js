import express from 'express';
import cors from 'cors';
import winston from 'winston';
import orderRoutes from './routes/delivery.routes.js';

const { combine, label, timestamp, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
})

global.fileName = 'pedidos.json';
//Logger settings
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'delivery-api.log' })
  ],
  format: combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    label({ label: 'delivery-api' }),
    myFormat
  )
})

const app = express();
const port = 3000;

app.use(cors());
app.use('/orders', orderRoutes);
app.listen(port, () => logger.info(`App listening on port ${port}`));