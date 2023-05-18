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
  let estoque = 0
  let valor = 0
  await livrosRepository.getLivro(pVenda.livroId).then(res => {
    estoque = parseInt(res['estoque'])
    valor = parseInt(res['valor'])
  })
  if (estoque > 0) {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${ano}/${mes}/${dia}`;

    await livrosRepository.updateLivro({
      livroId: pVenda.livroId,
      estoque: estoque - 1
    })
    pVenda.valor = valor
    pVenda.data = dataFormatada
    return await vendasRepository.createVenda(pVenda)
  }
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