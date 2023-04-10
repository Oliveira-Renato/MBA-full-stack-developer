import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

async function getOrders() {
  const orders = await readFile(global.fileName);
  return JSON.parse(orders);
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
  orders.pedidos[index].entregue = order.entregue || false;
  orders.pedidos[index].timestamp = new Date();

  await writeFile(global.fileName, JSON.stringify(orders, null, 2));
  return orders.pedidos[index];
}

export default {
  getOrders,
  deleteOrder,
  createOrder,
  updateOrder
}