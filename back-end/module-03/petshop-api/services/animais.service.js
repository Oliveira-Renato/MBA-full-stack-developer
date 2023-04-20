import AnimaisRepository from "../repositories/animais.repository.js";

async function getAnimais(proprietario_id) {
  return await AnimaisRepository.getAnimais(proprietario_id);
}

async function getAnimal(animalID) {
  return await AnimaisRepository.getAnimal(animalID);
}

async function createAnimal(animal) {
  return await AnimaisRepository.createAnimal(animal);
}

async function updateAnimal(animal) {
  return await AnimaisRepository.updateAnimal(animal);
}

async function deleteAnimal(animalID) {
  return await AnimaisRepository.deleteAnimal(animalID);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal
}