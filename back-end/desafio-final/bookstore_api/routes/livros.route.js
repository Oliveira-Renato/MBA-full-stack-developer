import express from 'express'
import livrosController from '../controllers/livros.controller.js'

const router = express.Router()

router.get('/', livrosController.getLivros)
router.get('/:id', livrosController.getLivro)
router.post('/', livrosController.createLivro)
router.put('/', livrosController.updateLivro)
router.delete('/:id', livrosController.deleteLivro)

export default router