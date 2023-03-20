import express from 'express';
import carList from '../routes/car.js';
import { promises as fs } from 'fs'

const app = express();
const port = 3000;
const { readFile, writeFile } = fs;

app.use(express.json());
app.use('/marcas', carList);

// app.listen(port, () => console.log(`Server listening on port ${port}`));
app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});