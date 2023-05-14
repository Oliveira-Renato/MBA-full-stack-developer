import express from 'express'
import autoresController from '../controllers/autores.controller.js'

const router = express.Router()

router.get('/', (req, res) => res.send('Bookstore API'))
router.get('/autores', autoresController.getAutores)
router.get('/autores/:id', autoresController.getAutor)
router.post('/autores', autoresController.createAutor)
router.put('/autores', autoresController.updateAutor)
router.delete('/autores/:id', autoresController.deleteAutor)

export default router