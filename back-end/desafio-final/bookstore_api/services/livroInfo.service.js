import livroInfoRepository from "../repositories/livroInfo.repository.js"


async function createLivroInfo(livroInfo) {
  await livroInfoRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(livroInfo) {
  await livroInfoRepository.updateLivroInfo(livroInfo);
}

async function createAvaliacao(review, livroId) {
  await livroInfoRepository.createAvaliacao(review, livroId);
}

async function deleteAvaliacao(livroId, index) {
  await livroInfoRepository.deleteAvaliacao(parseInt(livroId), index);
}

async function getLivrosInfo() {
  return await livroInfoRepository.getLivroInfo();
}

async function deleteLivroInfo(livroId) {
  await livroInfoRepository.deleteLivroInfo(livroId);
}

export default {
  createLivroInfo,
  updateLivroInfo,
  createAvaliacao,
  deleteAvaliacao,
  getLivrosInfo,
  deleteLivroInfo
}