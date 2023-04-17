import express from 'express';
import pg from 'pg';
import petshopRoutes from './routes/petshop.routes.prop.js';
import petshopRoutesAnimal from './routes/petshop.routes.animal.js';

const app = express();
const port = 3000;

app.use('/', petshopRoutes);
app.use('/animal', petshopRoutesAnimal);
app.listen(port, console.log(`App listening on port ${port}`));