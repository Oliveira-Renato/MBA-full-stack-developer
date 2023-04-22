import Animal from '../models/animals.model.js';

async function getAnimais(animal_id) {
  try {
    if (animal_id) {
      return await Animal.findAll({
        where: {
          proprietarioId: animal_id
        }
      });
    }
    return await Animal.findAll();
  } catch (error) {
    throw error;
  }
}

async function getAnimal(animalID) {
  try {
    return await Animal.findByPk(animalID);
  } catch (error) {
    throw error;
  }
}

async function createAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (error) {
    throw error;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animalId: animal.animalId
      }
    })
    return await getAnimal(animal.animalId);
  } catch (error) {
    throw error;
  }
}

async function deleteAnimal(animalId) {
  try {
    await Animal.destroy({
      where: {
        animalId: animalId
      }
    })
    return 'Animal deleted!'
  } catch (error) {
    throw error;
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal
}