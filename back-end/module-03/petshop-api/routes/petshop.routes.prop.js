import express from 'express';

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => res.send('Petshop API'));
router.get('/proprietario', (req, res) => res.send('Proprietario'));
router.get('/proprietario/:prop_id', (req, res) => res.send(''));
router.post('/proprietario', (req, res) => res.send(''));
router.put('/proprietario', (req, res) => res.send(''));
router.delete('/proprietario/:prop_id', (req, res) => res.send(''));

export default router;