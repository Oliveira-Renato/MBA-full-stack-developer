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

async function createCliente(cliente) {
  try {
    return await Clientes.create(cliente);
  } catch (error) {
    throw error;
  }
}

async function updateCliente(cliente) {
  try {
    await Clientes.update(cliente, {
      where: {
        clienteId: cliente.cliente_id
      }
    })
    return await getCliente(cliente.cliente_id);
  } catch (error) {
    throw error;
  }
}

async function deleteCliente(clienteId) {
  try {
    await Clientes.destroy({
      where: {
        clienteId: clienteId
      }
    })
    return 'PCliente excluido!'
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