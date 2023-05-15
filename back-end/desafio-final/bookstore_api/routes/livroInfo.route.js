import express from 'express'
import livroInfoController from '../controllers/livroInfo.controller.js'

const router = express.Router()

router.post("/info", livroInfoController.getLivrosInfo);
router.post("/info", livroInfoController.createLivroInfo);
router.put("/info", livroInfoController.updateLivroInfo);
router.post("/avaliacao", livroInfoController.createAvaliacao);
router.delete("/:id/avaliacao/:index", livroInfoController.deleteAvaliacao);
router.delete("/info/:id", livroInfoController.deleteLivroInfo);

export default router