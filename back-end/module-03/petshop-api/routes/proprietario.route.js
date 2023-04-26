import express from 'express';
import proprietarioController from '../controllers/proprietario.controller.js';

const router = express.Router();

router.get('/', (req, res) => res.send('<h1>Petshop API</h1>'));
router.get('/proprietario', proprietarioController.getProprietarios);
router.get('/proprietario/:prop_id', proprietarioController.getProprietario);
router.post('/proprietario', proprietarioController.createProprietario);
router.put('/proprietario', proprietarioController.updateProprietario);
router.delete('/proprietario/:prop_id', proprietarioController.deleteProprietario);

export default router;