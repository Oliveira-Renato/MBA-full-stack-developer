import express from 'express'
import autoresController from '../controllers/autores.controller.js'

const router = express.Router()

router.get('/', autoresController.getAutores)
router.get('/:id', autoresController.getAutor)
router.post('/', autoresController.createAutor)
router.put('/', autoresController.updateAutor)
router.delete('/:id', autoresController.deleteAutor)

export default router