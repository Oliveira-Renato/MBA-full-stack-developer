import proprietarioRepository from "../repositories/prorprietario.repository.js";
import AnimaisRepository from '../repositories/animais.repository.js';


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

async function deleteProprietario(proprietarioId) {
  const animalsByProp = await AnimaisRepository.getAnimais(proprietarioId);

  if (animalsByProp.length > 0) {
    throw new Error('Existe um ou mais animais registrado nesse proprietário. Processo de exclusão abortado.');
  }

  return await proprietarioRepository.deleteProprietario(proprietarioId);
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario
}