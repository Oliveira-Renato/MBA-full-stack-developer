import proprietarioRepository from "../repositories/prorprietario.repository.js";

async function createProprietario(proprietario) {
  return await proprietarioRepository.createProprietario(proprietario);
}

export default {
  createProprietario
}