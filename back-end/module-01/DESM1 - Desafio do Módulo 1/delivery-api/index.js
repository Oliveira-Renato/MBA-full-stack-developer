import express from 'express';
import orderRoutes from './routes/delivery.routes.js';

global.fileName = 'pedidos.json';

const app = express();
const port = 3000;

app.use('/orders', orderRoutes);
app.listen(port, () => console.log(`App listening on port ${port}`));