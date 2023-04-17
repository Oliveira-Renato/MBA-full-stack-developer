import express from 'express';
import proprietarioController from '../controllers/proprietario.controller.js';

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => res.send('Petshop API'));
router.get('/proprietario', (req, res) => res.send('Proprietario'));
router.get('/proprietario/:prop_id', (req, res) => res.send(''));
router.post('/proprietario', proprietarioController.createProprietario);
router.put('/proprietario', (req, res) => res.send(''));
router.delete('/proprietario/:prop_id', (req, res) => res.send(''));

export default router;