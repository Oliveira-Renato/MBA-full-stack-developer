import Proprietario from '../models/proprietario.model.js';

async function getProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (error) {
    throw error;
  }
}

async function getProprietario(proprietarioID) {
  try {
    return await Proprietario.findByPk(proprietarioID);
  } catch (error) {
    throw error;
  }
}

async function createProprietario(proprietario) {
  try {
    return await Proprietario.create(proprietario);
  } catch (error) {
    throw error;
  }
}

async function updateProprietario(proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId: proprietario.proprietario_id
      }
    })
    return await getProprietario(proprietario.proprietario_id);
  } catch (error) {
    throw error;
  }
}

async function deleteProprietario(proprietarioId) {
  try {
    await Proprietario.destroy({
      where: {
        proprietarioId: proprietarioId
      }
    })
    return 'Proprietário excluido!'
  } catch (error) {
    throw error;
  }
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario
}
