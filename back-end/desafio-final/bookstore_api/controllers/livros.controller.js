import livrosService from "../services/livros.service.js"

async function getLivros(req, res, next) {
  try {
    logger.info(`GET /Livros`);
    console.log(req.query)
    res.send(await livrosService.getLivros(parseInt(req.query.autor_id)));
  } catch (error) {
    next(error)
  }
}

async function getLivro(req, res, next) {
  try {
    res.send(await livrosService.getLivro(req.params.id));
    logger.info(`GET /Livro  ID - `, req.params.id);
  } catch (error) {
    next(error);
  }
}

async function createLivro(req, res, next) {
  try {
    let livro = req.body;
    if (!livro.nome || !livro.valor) {
      throw new Error('nome, email e telefone são obrigatórios!');
    } else {
      res.send(await livrosService.createLivro(livro));
      logger.info(`POST /Livro - ${livro}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateLivro(req, res, next) {
  try {
    let livro = req.body;
    console.log(livro)
    if (!livro.livroId) {
      throw new Error('ID obrigatório!');
    } else {
      logger.info(`PUT /Livro - ${livro}`);
      res.send(await livrosService.updateLivro(livro));
    }
  } catch (error) {
    next(error)
  }
}

async function deleteLivro(req, res, next) {
  try {
    if (req.params.id) {
      res.send(await livrosService.deleteLivro(req.params));
      logger.info(`DELETE /Livro  ID - `, req.params.id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  createLivro,
  updateLivro,
  deleteLivro,
  getLivros,
  getLivro
}