import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

async function getOrders() {
  const orders = await readFile(global.fileName);
  return JSON.parse(orders);
}

async function getOrderByID(id) {
  const orders = await getOrders();
  const data = orders.pedidos.find(order => order.id === parseInt(id));

  return data;
}

async function getOrdersByClient(cliente) {
  let totalValue = 0;
  const orders = await getOrders();
  const data = orders.pedidos.filter(order => order.cliente === cliente && order.entregue === true);

  for (let idx = 0; idx < data.length; idx++) {
    totalValue = totalValue + data[idx].valor;
  }
  return {
    "client": cliente,
    "valorTotal": totalValue
  };
}

async function getOrdersByProduct(product) {
  let totalProduct = 0;
  const orders = await getOrders();
  const data = orders.pedidos.filter(order => order.produto === product);

  for (let idx = 0; idx < data.length; idx++) {
    if (data[idx].entregue === true) {
      totalProduct = totalProduct + data[idx].valor;
    }
  }
  return {
    "product": product,
    "valorTotal": totalProduct
  };
}
async function deleteOrder(id) {
  const orders = await getOrders();
  const data = orders.pedidos.filter(order => order.id != id);

  orders.pedidos = data;
  await writeFile(global.fileName, JSON.stringify(orders, null, 2));
  return 'Delete Order Success';
}
async function createOrder(order) {
  const orders = await getOrders();
  let newOrder = {
    id: orders.nextId++,
    cliente: order.cliente,
    produto: order.produto,
    valor: order.valor,
    entregue: false,
    timestamp: new Date()
  }

  orders.pedidos.push(newOrder);
  await writeFile(global.fileName, JSON.stringify(orders, null, 2));

  return newOrder;
}
async function updateOrder(order) {
  const orders = await getOrders();
  const index = orders.pedidos.findIndex(ped => ped.id == order.id);

  if (index === -1) {
    throw new Error('Order not founded.');
  }

  orders.pedidos[index].cliente = order.cliente || orders.pedidos[index].cliente;
  orders.pedidos[index].produto = order.produto || orders.pedidos[index].produto;
  orders.pedidos[index].valor = order.valor || orders.pedidos[index].valor;
  orders.pedidos[index].entregue = order.entregue || orders.pedidos[index].entregue;
  orders.pedidos[index].timestamp = new Date();

  await writeFile(global.fileName, JSON.stringify(orders, null, 2));
  return orders.pedidos[index];
}
async function mostSelledProduct() {
  const orders = JSON.parse(await readFile(global.fileName)).pedidos;
  let listProducts = [],
    listFreq = [],
    result = {},
    count = 0;

  orders.forEach((order) => {
    if (order.entregue === true) {
      listProducts.push(order.produto)
    }
  });

  for (let i = 0; i < listProducts.length; i++) {
    if (listFreq.indexOf(listProducts[i]) === -1) {
      for (let j = 1; j < listProducts.length; j++) {
        if (listProducts[i] === listProducts[j]) {
          listFreq[i] = `${listProducts[i]}`;
          result[i] = {
            produto: listProducts[i],
            quantidade: count += 1
          }
        }
      }
    }
    count = 0;
  }

  result = Object.values(result).sort((a, b) => b.quantidade - a.quantidade);
  return result;
}


export default {
  getOrders,
  getOrderByID,
  getOrdersByClient,
  getOrdersByProduct,
  deleteOrder,
  createOrder,
  updateOrder,
  mostSelledProduct
}