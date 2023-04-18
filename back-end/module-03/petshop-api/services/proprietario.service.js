import proprietarioRepository from "../repositories/prorprietario.repository.js";

async function getProprietarios() {
  return await proprietarioRepository.getProprietarios();
}

async function getProprietario(proprietarioID) {
  return await proprietarioRepository.getProprietario(proprietarioID);
}

async function createProprietario(proprietario) {
  return await proprietarioRepository.createProprietario(proprietario);
}

async function updateProprietario(proprietario) {
  return await proprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(proprietarioID) {
  return await proprietarioRepository.deleteProprietario(proprietarioID);
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario
}