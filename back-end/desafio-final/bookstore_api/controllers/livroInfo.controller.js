import livroInfoService from "../services/livroInfo.service.js"

async function createLivroInfo(req, res, next) {
  try {
    let livroInfo = req.body;
    if (!livroInfo.livroId) {
      throw new Error("Livro ID é obrigatório.");
    }
    await livroInfoService.createLivroInfo(livroInfo);
    res.end();
    logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function updateLivroInfo(req, res, next) {
  try {
    let livroInfo = req.body;
    if (!livroInfo.livroId) {
      throw new Error("Livro ID é obrigatório.");
    }
    await livroInfoService.updateLivroInfo(livroInfo);
    res.end();
    logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function createAvaliacao(req, res, next) {
  try {
    let params = req.body;
    if (!req.params.id) {
      throw new Error("Livro ID obrigatórios.");
    }
    await livroInfoService.createAvaliacao(params, req.params.id);
    logger.info(`POST /livro/avaliacoes`);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function deleteAvaliacao(req, res, next) {
  try {
    await livroInfoService.deleteAvaliacao(req.params.id, req.params.index);
    logger.info(`DELETE /livro/${req.params.id}/avaliacao/${req.params.index}`);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function getLivrosInfo(req, res, next) {
  try {
    res.send(await livroInfoService.getLivrosInfo());
    logger.info("GET /livro/info");
  } catch (err) {
    next(err);
  }
}

async function deleteLivroInfo(req, res, next) {
  try {
    res.send(await livroInfoService.deleteLivroInfo(parseInt(req.params.id)));
    logger.info("DELETE /livro/info");
  } catch (err) {
    next(err);
  }
}

export default {
  createLivroInfo,
  updateLivroInfo,
  createAvaliacao,
  deleteAvaliacao,
  getLivrosInfo,
  deleteLivroInfo
}