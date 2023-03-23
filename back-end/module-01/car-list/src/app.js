import express from 'express';
import brandRouter from '../routes/brandRouter.js';

const app = express();
app.use(express.json());
app.use('/marcas', brandRouter);
app.listen(3000, () => console.log(`App listening on port ${port}`));
