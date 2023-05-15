import livroInfoRepository from "../repositories/livroInfo.repository.js"
import livrosRepository from "../repositories/livros.repository.js"

async function getLivros(req, res, next) {
  return await livrosRepository.getLivros()
}

async function getLivro(pLivroId) {
  const livro = await livrosRepository.getLivro(pLivroId)
  livro.info = await livroInfoRepository.getLivroInfo(parseInt(pLivroId))
  return livro
}

async function createLivro(pLivro) {
  return await livrosRepository.createLivro(pLivro)
}

async function updateLivro(pLivro) {
  return await livrosRepository.updateLivro(pLivro)
}

async function deleteLivro(pLivro) {
  return await livrosRepository.deleteLivro(pLivro)
}

export default {
  createLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro
}