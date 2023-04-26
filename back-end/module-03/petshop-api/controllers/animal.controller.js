import animalService from "../services/animal.service.js";


async function getAnimais(req, res, next) {
  try {
    logger.info(`GET /Animais`);
    res.send(await animalService.getAnimais());
  } catch (error) {
    next(error)
  }
}

async function getAnimal(req, res, next) {
  try {
    if (req.params.prop_id) {
      res.send(await animalService.getAnimal(req.params.prop_id));
      logger.info(`GET /Animal  ID - `, req.params.prop_id);
    }
    throw new Error('ID obrigatório para consulta!');
  } catch (error) {
    next(error);
  }
}

async function insertAnimal(req, res, next) {
  try {
    let vProprietario = req.body;
    if (!vProprietario.nome || !vProprietario.telefone) {
      throw new Error('nome e telefone são obrigatórios!');
    } else {
      res.send(await animalService.insertAnimal(vProprietario));
      logger.info(`POST /vProprietario - ${vProprietario}`);
    }
  } catch (error) {
    next(error)
  }
}

async function updateAnimal(req, res, next) {
  try {
    let vProprietario = req.body;
    if (!vProprietario.proprietario_id || !vProprietario.nome || !vProprietario.telefone) {
      throw new Error('ID, nome e telefone são obrigatórios!');
    } else {
      res.send(await animalService.updateAnimal(vProprietario));
      logger.info(`PUT /proprietario - ${vProprietario}`);
    }
  } catch (error) {
    next(error)
  }
}

async function deleteAnimal(req, res, next) {
  try {
    if (req.params.prop_id) {
      res.send(await animalService.deleteAnimal(req.params.prop_id));
      logger.info(`DELETE /animal  ID - `, req.params.prop_id);
    }
    throw new Error('ID obrigatório para exclusão!');
  } catch (error) {
    next(error);
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal
}