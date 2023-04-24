import ServicesService from "../services/servicos.service.js";


async function getServices(req, res, next) {
  try {
    logger.info(`GET /Services`);
    console.log(req.query);
    res.send(await ServicesService.getServices(req.query.proprietario_id));
  } catch (error) {
    next(error)
  }
}

async function getService(req, res, next) {
  try {
    if (req.params.ser_id) {
      res.send(await ServicesService.getService(req.params.ser_id));
      logger.info(`GET /Service  ID - `, req.params.ser_id);
    }
    throw new Error('ID obrigatório para consulta!');
  } catch (error) {
    next(error);
  }
}

async function createService(req, res, next) {
  try {
    let vService = req.body;
    if (!vService.descricao || !vService.valor || !vService.animalId) {
      throw new Error('descricao e valor e animalId são obrigatórios!');
    } else {
      res.send(await ServicesService.createService(vService));
      logger.info(`POST /Service - ${vService}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateService(req, res, next) {
  try {
    let vService = req.body;
    if (!vService.servicoId) {
      throw new Error('id é obrigatório!');
    } else {
      res.send(await ServicesService.updateService(vService));
      logger.info(`PUT /Service - ${vService}`);
    }
  } catch (error) {
    next(error)
  }
}

async function deleteService(req, res, next) {
  try {
    if (req.params.ser_id) {
      res.send(await ServicesService.deleteService(req.params.ser_id));
      logger.info(`DELETE /Service  ID - `, req.params.ser_id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  createService,
  updateService,
  deleteService,
  getServices,
  getService
}