import Livros from '../models/livros.model.js'

async function getLivros() {
  try {
    return await Livros.findAll({
      attributes: { exclude: ['senha'] }
    });
  } catch (error) {
    throw error;
  }
}

async function getLivro(pLivroId) {
  try {
    return await Livros.findByPk(pLivroId);
  } catch (error) {
    throw error;
  }
}

async function createLivro(pLivro) {
  try {
    return await Livros.create(pLivro);
  } catch (error) {
    throw error;
  }
}

async function updateLivro(pLivro) {
  try {
    await Livros.update(pLivro, {
      where: {
        livroId: pLivro.livroId
      }
    })
    return await getLivro(pLivro.livroId);
  } catch (error) {
    throw error;
  }
}

async function deleteLivro(pLivro) {
  try {
    await Livros.destroy({
      where: {
        livroId: pLivro.id
      }
    })
    return 'Livro excluido!'
  } catch (error) {
    throw error;
  }
}

export default {
  createLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro
}