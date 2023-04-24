import express from 'express';
import ServicesController from '../controllers/servicos.controller.js';

const router = express.Router();

router.get('/', ServicesController.getServices);
router.get('/:ser_id', ServicesController.getService);
router.post('/', ServicesController.createService);
router.put('/', ServicesController.updateService);
router.delete('/:ser_id', ServicesController.deleteService);

export default router;