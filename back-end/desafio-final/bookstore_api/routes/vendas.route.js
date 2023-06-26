import express from 'express'
import vendasController from '../controllers/vendas.controller.js'

const router = express.Router()

router.get('/', vendasController.getVendas)
router.get('/:id', vendasController.getVenda)
router.post('/', vendasController.createVenda)
router.delete('/:id', vendasController.deleteVenda)

export default router