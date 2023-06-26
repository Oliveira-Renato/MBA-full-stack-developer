import autoresService from "../services/autores.service.js"

async function getAutores(req, res, next) {
  try {
    logger.info(`GET /Autores`);
    res.send(await autoresService.getAutores());
  } catch (error) {
    next(error)
  }
}

async function getAutor(req, res, next) {
  try {
    if (req.params.id) {
      res.send(await autoresService.getAutor(req.params.id));
      logger.info(`GET /Autor  ID - `, req.params.id);
    }
    throw new Error('ID obrigatório para consulta!');
  } catch (error) {
    next(error);
  }
}

async function createAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.nome || !autor.telefone || !autor.email) {
      throw new Error('nome, email e telefone são obrigatórios!');
    } else {
      res.send(await autoresService.createAutor(autor));
      logger.info(`POST /Autor - ${autor}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateAutor(req, res, next) {
  try {
    let autor = req.body;
    console.log(autor)
    if (!autor.autorId) {
      throw new Error('ID obrigatório!');
    } else {
      logger.info(`PUT /Autor - ${autor}`);
      res.send(await autoresService.updateAutor(autor));
    }
  } catch (error) {
    next(error)
  }
}

async function deleteAutor(req, res, next) {
  try {
    if (req.params.id) {
      res.send(await autoresService.deleteAutor(req.params));
      logger.info(`DELETE /Autor  ID - `, req.params.id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  createAutor,
  updateAutor,
  deleteAutor,
  getAutores,
  getAutor
}