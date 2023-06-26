import clientesRepository from "../repositories/clientes.repository.js"

async function getClientes(req, res, next) {
  return await clientesRepository.getClientes();
}

async function getCliente(pClienteId) {
  return await clientesRepository.getCliente(pClienteId);
}

async function createCliente(pCliente) {
  return await clientesRepository.createCliente(pCliente);
}

async function updateCliente(pCliente) {
  return await clientesRepository.updateCliente(pCliente);
}

async function deleteCliente(pCliente) {
  return await clientesRepository.deleteCliente(pCliente);
}

export default {
  createCliente,
  updateCliente,
  deleteCliente,
  getClientes,
  getCliente
}