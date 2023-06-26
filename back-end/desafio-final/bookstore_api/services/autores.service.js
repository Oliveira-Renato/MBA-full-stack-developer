import autoresRepository from "../repositories/autores.repository.js"

async function getAutores(req, res, next) {
  return await autoresRepository.getAutores();
}

async function getAutor(pAutorId) {
  return await autoresRepository.getAutor(pAutorId);
}

async function createAutor(pAutor) {
  return await autoresRepository.createAutor(pAutor);
}

async function updateAutor(pAutor) {
  return await autoresRepository.updateAutor(pAutor);
}

async function deleteAutor(pAutor) {
  return await autoresRepository.deleteAutor(pAutor);
}

export default {
  createAutor,
  updateAutor,
  deleteAutor,
  getAutores,
  getAutor
}