import express from 'express'
import clientesController from '../controllers/clientes.controller.js'

const router = express.Router()

router.get('/', (req, res) => res.send('Bookstore API'))
router.get('/clientes', clientesController.getClientes)
router.get('/clientes/:id', clientesController.getCliente)

export default router