import proprietarioService from "../services/proprietario.service.js";

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


export default {
  createProprietario
}