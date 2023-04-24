import ServicesRepository from "../repositories/servicos.repository.js";

async function getServices(servico_id) {
  return await ServicesRepository.getServices(servico_id);
}

async function getService(ServiceID) {
  return await ServicesRepository.getService(ServiceID);
}

async function createService(Service) {
  return await ServicesRepository.createService(Service);
}

async function updateService(Service) {
  return await ServicesRepository.updateService(Service);
}

async function deleteService(ServiceID) {
  return await ServicesRepository.deleteService(ServiceID);
}

export default {
  createService,
  updateService,
  deleteService,
  getServices,
  getService
}