import express from 'express';
import AnimaisController from '../controllers/animais.controller.js';

const router = express.Router();

router.get('/', AnimaisController.getAnimais);
router.get('/:prop_id', AnimaisController.getAnimal);
router.post('/', AnimaisController.createAnimal);
router.put('/', AnimaisController.updateAnimal);
router.delete('/:prop_id', AnimaisController.deleteAnimal);

export default router;