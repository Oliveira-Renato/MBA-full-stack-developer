import livrosRepository from "../repositories/livros.repository.js"
import vendasRepository from "../repositories/vendas.repository.js"

async function getVendas(vendaId, livroId, autorId) {
  const livrosId = []
  if (autorId) {
    await livrosRepository.getLivros(autorId).then(res => {
      for (let i = 0; i < res.length; i++) {
        livrosId.push(res[i]['livroId']);
      }
    })
    console.log(livrosId)
  }
  livrosId.push(livroId)
  return await vendasRepository.getVendas(vendaId, livrosId)
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