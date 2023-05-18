import vendasService from "../services/vendas.service.js"

async function getVendas(req, res, next) {
  try {
    logger.info(`GET /Vendas`);
    console.log(req.query)
    res.send(await vendasService.getVendas(parseInt(req.query.cliente_id)));
  } catch (error) {
    next(error)
  }
}

async function getVenda(req, res, next) {
  try {
    res.send(await vendasService.getVenda(req.params.id));
    logger.info(`GET /Venda  ID - `, req.params.id);
  } catch (error) {
    next(error);
  }
}

async function createVenda(req, res, next) {
  try {
    let livro = req.body;
    if (!livro.nome || !livro.valor) {
      throw new Error('nome, email e telefone são obrigatórios!');
    } else {
      res.send(await vendasService.createVenda(livro));
      logger.info(`POST /Venda - ${livro}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateVenda(req, res, next) {
  try {
    let livro = req.body;
    console.log(livro)
    if (!livro.livroId) {
      throw new Error('ID obrigatório!');
    } else {
      logger.info(`PUT /Venda - ${livro}`);
      res.send(await vendasService.updateVenda(livro));
    }
  } catch (error) {
    next(error)
  }
}

async function deleteVenda(req, res, next) {
  try {
    if (req.params.id) {
      res.send(await vendasService.deleteVenda(req.params));
      logger.info(`DELETE /Venda  ID - `, req.params.id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  createVenda,
  updateVenda,
  deleteVenda,
  getVendas,
  getVenda
}