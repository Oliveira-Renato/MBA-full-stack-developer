import Vendas from '../models/vendas.model.js'

async function getVendas(vendaId) {
  try {
    if (vendaId) {
      return await Vendas.findAll({
        where: {
          vendaId: vendaId
        }
      });
    }
    return await Vendas.findAll();
  } catch (error) {
    throw error;
  }
}

async function getVenda(pVendaId) {
  try {
    return await Vendas.findByPk(pVendaId, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function createVenda(pVenda) {
  try {
    return await Vendas.create(pVenda);
  } catch (error) {
    throw error;
  }
}

async function updateVenda(pVenda) {
  try {
    await Vendas.update(pVenda, {
      where: {
        vendaId: pVenda.vendaId
      }
    })
    return await getVenda(pVenda.vendaId);
  } catch (error) {
    throw error;
  }
}

async function deleteVenda(pVenda) {
  try {
    await Vendas.destroy({
      where: {
        vendaId: pVenda.id
      }
    })
    return 'Venda excluido!'
  } catch (error) {
    throw error;
  }
}

export default {
  createVenda,
  updateVenda,
  deleteVenda,
  getVendas,
  getVenda
}