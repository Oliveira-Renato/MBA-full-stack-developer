import livrosRepository from "../repositories/livros.repository.js"

async function getLivros(req, res, next) {
  return await livrosRepository.getLivros();
}

async function getLivro(pLivroId) {
  return await livrosRepository.getLivro(pLivroId);
}

async function createLivro(pLivro) {
  return await livrosRepository.createLivro(pLivro);
}

async function updateLivro(pLivro) {
  return await livrosRepository.updateLivro(pLivro);
}

async function deleteLivro(pLivro) {
  return await livrosRepository.deleteLivro(pLivro);
}

export default {
  createLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro
}