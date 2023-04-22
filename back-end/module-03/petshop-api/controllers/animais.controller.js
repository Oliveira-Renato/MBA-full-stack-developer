import AnimaisService from "../services/animais.service.js";


async function getAnimais(req, res, next) {
  try {
    logger.info(`GET /Animais`);
    res.send(await AnimaisService.getAnimais(req.query.proprietarioId));
  } catch (error) {
    next(error)
  }
}

async function getAnimal(req, res, next) {
  try {
    if (req.params.prop_id) {
      res.send(await AnimaisService.getAnimal(req.params.prop_id));
      logger.info(`GET /Animal  ID - `, req.params.prop_id);
    }
    throw new Error('ID obrigatório para consulta!');
  } catch (error) {
    next(error);
  }
}

async function createAnimal(req, res, next) {
  try {
    let vAnimal = req.body;
    if (!vAnimal.nome || !vAnimal.tipo || !vAnimal.proprietarioId) {
      throw new Error('nome e tipo e proprietarioId são obrigatórios!');
    } else {
      res.send(await AnimaisService.createAnimal(vAnimal));
      logger.info(`POST /animal - ${vAnimal}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateAnimal(req, res, next) {
  try {
    let vAnimal = req.body;
    if (!vAnimal.animalId) {
      throw new Error('id é obrigatório!');
    } else {
      res.send(await AnimaisService.updateAnimal(vAnimal));
      logger.info(`PUT /animal - ${vAnimal}`);
    }
  } catch (error) {
    next(error)
  }
}

async function deleteAnimal(req, res, next) {
  try {
    if (req.params.prop_id) {
      res.send(await AnimaisService.deleteAnimal(req.params.prop_id));
      logger.info(`DELETE /animal  ID - `, req.params.prop_id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal
}