import vendasRepository from "../repositories/vendas.repository.js"

async function getVendas(vendaId, livroId) {
  return await vendasRepository.getVendas(vendaId, livroId)
}

async function getVenda(pVendaId) {
  const venda = await vendasRepository.getVenda(pVendaId)
  //venda.info = await vendaInfoRepository.getVendaInfo(parseInt(pVendaId))
  return venda
}

async function createVenda(pVenda) {
  return await vendasRepository.createVenda(pVenda)
}

async function updateVenda(pVenda) {
  return await vendasRepository.updateVenda(pVenda)
}

async function deleteVenda(pVenda) {
  return await vendasRepository.deleteVenda(pVenda)
}

export default {
  createVenda,
  updateVenda,
  deleteVenda,
  getVendas,
  getVenda
}