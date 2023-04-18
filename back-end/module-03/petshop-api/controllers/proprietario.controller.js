import proprietarioService from "../services/proprietario.service.js";


async function getProprietarios(req, res, next) {
  try {
    logger.info(`GET /Proprietarios`);
    res.send(await proprietarioService.getProprietarios());
  } catch (error) {
    next(error)
  }
}
async function getProprietario(req, res, next) {
  try {
    if (req.params.prop_id) {
      res.send(await proprietarioService.getProprietario(req.params.prop_id));
      logger.info(`GET /proprietario  ID - `, req.params.prop_id);
    }
    throw new Error('ID obrigatório para consulta!');
  } catch (error) {
    next(error);
  }
}

async function createProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error('nome e telefone são obrigatórios!');
    } else {
      res.send(await proprietarioService.createProprietario(proprietario));
      logger.info(`POST /proprietario - ${proprietario}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone) {
      throw new Error('ID, nome e telefone são obrigatórios!');
    } else {
      res.send(await proprietarioService.updateProprietario(proprietario));
      logger.info(`PUT /proprietario - ${proprietario}`);
    }
  } catch (error) {
    next(error)
  }
}

async function deleteProprietario(req, res, next) {
  try {
    if (req.params.prop_id) {
      res.send(await proprietarioService.deleteProprietario(req.params.prop_id));
      logger.info(`DELETE /proprietario  ID - `, req.params.prop_id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario
}