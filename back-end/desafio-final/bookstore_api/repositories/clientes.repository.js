import Clientes from '../models/clientes.model.js'

async function getClientes() {
  try {
    return await Clientes.findAll({
      attributes: { exclude: ['senha'] }
    });
  } catch (error) {
    throw error;
  }
}

async function getCliente(pClienteId) {
  try {
    return await Clientes.findByPk(pClienteId, {
      attributes: { exclude: ['senha'] }
    });
  } catch (error) {
    throw error;
  }
}

async function createCliente(pCliente) {
  try {
    return await Clientes.create(pCliente);
  } catch (error) {
    throw error;
  }
}

async function updateCliente(pCliente) {
  try {
    await Clientes.update(pCliente, {
      where: {
        clienteId: pCliente.clienteId
      }
    })
    return await getCliente(pCliente.clienteId);
  } catch (error) {
    throw error;
  }
}

async function deleteCliente(pCliente) {
  try {
    await Clientes.destroy({
      where: {
        clienteId: pCliente.id
      }
    })
    return 'Cliente excluido!'
  } catch (error) {
    throw error;
  }
}

export default {
  createCliente,
  updateCliente,
  deleteCliente,
  getClientes,
  getCliente
}