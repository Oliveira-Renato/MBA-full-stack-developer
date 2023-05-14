import clientesService from "../services/clientes.service.js";

async function getClientes(req, res, next) {
  try {
    logger.info(`GET /Clientes`);
    res.send(await clientesService.getClientes());
  } catch (error) {
    next(error)
  }
}
async function getCliente(req, res, next) {
  try {
    if (req.params.id) {
      res.send(await clientesService.getCliente(req.params.id));
      logger.info(`GET /Cliente  ID - `, req.params.id);
    }
    throw new Error('ID obrigatório para consulta!');
  } catch (error) {
    next(error);
  }
}

async function createCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (!cliente.nome || !cliente.telefone) {
      throw new Error('nome e telefone são obrigatórios!');
    } else {
      res.send(await clientesService.createCliente(cliente));
      logger.info(`POST /Cliente - ${cliente}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (!cliente.cliente || !cliente.nome || !cliente.telefone) {
      throw new Error('ID, nome e telefone são obrigatórios!');
    } else {
      res.send(await clientesService.updateCliente(cliente));
      logger.info(`PUT /Cliente - ${cliente}`);
    }
  } catch (error) {
    next(error)
  }
}

async function deleteCliente(req, res, next) {
  try {
    if (req.params.id) {
      res.send(await clientesService.deleteCliente(req.params.id));
      logger.info(`DELETE /Cliente  ID - `, req.params.id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  createCliente,
  updateCliente,
  deleteCliente,
  getClientes,
  getCliente
}