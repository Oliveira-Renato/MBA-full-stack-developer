import Animal from '../models/animals.model.js';
import Service from '../models/servicos.model.js';

async function getServices(propId) {
  try {
    if (propId) {
      return await Service.findAll({
        include: [
          {
            model: Animal,
            where: {
              proprietarioId: propId
            }
          }
        ]
      })
    }
    return await Service.findAll();
  } catch (error) {
    throw error;
  }
}

async function getService(ServiceID) {
  try {
    return await Service.findByPk(ServiceID);
  } catch (error) {
    throw error;
  }
}

async function createService(service) {
  try {
    return await Service.create(service);
  } catch (error) {
    throw error;
  }
}

async function updateService(pService) {
  try {
    await Service.update(pService, {
      where: {
        serviceId: pService.serviceId
      }
    })
    return await getService(pService.serviceId);
  } catch (error) {
    throw error;
  }
}

async function deleteService(pserviceId) {
  try {
    await Service.destroy({
      where: {
        serviceId: pserviceId
      }
    })
    return 'Service deleted!'
  } catch (error) {
    throw error;
  }
}

export default {
  createService,
  updateService,
  deleteService,
  getServices,
  getService
}