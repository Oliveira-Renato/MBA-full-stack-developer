import express from 'express'
import livrosController from '../controllers/livros.controller.js'
import livroInfoController from '../controllers/livroInfo.controller.js'

const router = express.Router()

router.get('/', livrosController.getLivros)
router.get("/info", livroInfoController.getLivrosInfo);
router.get('/:id', livrosController.getLivro)
router.post('/', livrosController.createLivro)
router.put('/', livrosController.updateLivro)
router.delete('/:id', livrosController.deleteLivro)
/* livros info */

router.post("/info", livroInfoController.createLivroInfo);
router.put("/info", livroInfoController.updateLivroInfo);
router.post("/:id/avaliacao", livroInfoController.createAvaliacao);
router.delete("/:id/avaliacao/:index", livroInfoController.deleteAvaliacao);
router.delete("/info/:id", livroInfoController.deleteLivroInfo);

export default router