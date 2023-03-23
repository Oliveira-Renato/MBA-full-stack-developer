import express from 'express';
import brandRouter from '../routes/brandRouter.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use('/marcas', brandRouter);
app.listen(port, () => console.log(`App listening on port ${port}`));
