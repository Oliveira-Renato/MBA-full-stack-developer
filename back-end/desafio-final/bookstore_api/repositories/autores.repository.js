import Autores from '../models/autores.model.js'

async function getAutores() {
  try {
    return await Autores.findAll({
      attributes: { exclude: ['senha'] }
    });
  } catch (error) {
    throw error;
  }
}

async function getAutor(pAutorId) {
  try {
    return await Autores.findByPk(pAutorId, {
      attributes: { exclude: ['senha'] }
    });
  } catch (error) {
    throw error;
  }
}

async function createAutor(pAutor) {
  try {
    return await Autores.create(pAutor);
  } catch (error) {
    throw error;
  }
}

async function updateAutor(pAutor) {
  try {
    await Autores.update(pAutor, {
      where: {
        autorId: pAutor.autorId
      }
    })
    return await getAutor(pAutor.autorId);
  } catch (error) {
    throw error;
  }
}

async function deleteAutor(pAutor) {
  try {
    await Autores.destroy({
      where: {
        autorId: pAutor.id
      }
    })
    return 'Autor excluido!'
  } catch (error) {
    throw error;
  }
}

export default {
  createAutor,
  updateAutor,
  deleteAutor,
  getAutores,
  getAutor
}