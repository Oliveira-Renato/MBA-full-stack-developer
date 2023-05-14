import clientesRepository from "../repositories/clientes.repository.js";

async function getClientes(req, res, next) {
  return await clientesRepository.getClientes();
}
async function getCliente(pClienteId) {
  return await clientesRepository.getCliente(pClienteId);
}

async function createCliente(req, res, next) {
  return await clientesRepository.createCliente();
}

async function updateCliente(req, res, next) {
  return await clientesRepository.updateCliente();
}

async function deleteCliente(req, res, next) {
  return await clientesRepository.deleteCliente(clienteId);
}

export default {
  createCliente,
  updateCliente,
  deleteCliente,
  getClientes,
  getCliente
}