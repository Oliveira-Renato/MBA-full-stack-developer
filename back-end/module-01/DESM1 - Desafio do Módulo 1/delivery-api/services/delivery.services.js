import OrdersRepository from '../repositories/delivery.repository.js';

//Retorna todos os pedidos
async function getOrders() {
  return await OrdersRepository.getOrders();
}
//Retorna somente o pedido referente ao id passado como paramêtro
async function getOrderByID(id) {
  const orders = await OrdersRepository.getOrders()
  const data = orders.pedidos.find(order => order.id === parseInt(id));

  return data;
}
//Retorna todos os pedidos referente ao cliente passado como paramêtro
async function getOrdersByClient(cliente) {
  const orders = await OrdersRepository.getOrders();
  console.log(orders.pedidos)
  const totalValue = orders.pedidos
    .filter(order => order.cliente === cliente && order.entregue)
    .map(order => order.valor)
    .reduce((prev, curr) => prev + curr, 0);

  return totalValue;
}
//Retorna todos os pedidos referente ao produto passado como paramêtro
async function getOrdersByProduct(product) {
  const orders = await OrdersRepository.getOrders();
  const totalValue = orders.pedidos
    .filter(order => order.produto === product && order.entregue)
    .map((order) => order.valor)
    .reduce((prev, curr) => prev + curr, 0)

  return totalValue;
}
<<<<<<< HEAD
//Delete o pedido
=======

>>>>>>> 5e4025e (need some fix)
async function deleteOrder(id) {
  await OrdersRepository.deleteOrder(id);
}
<<<<<<< HEAD
//Cria um novo pedido
=======

>>>>>>> 5e4025e (need some fix)
async function createOrder(order) {
  await OrdersRepository.createOrder(order);
}
<<<<<<< HEAD
//Atualiza um pedido específico
=======

>>>>>>> 5e4025e (need some fix)
async function updateOrder(order) {
  await OrdersRepository.updateOrder(order);
}
<<<<<<< HEAD
//Retorna os produtos com mais pedidos em ordem decrescente
=======

>>>>>>> 5e4025e (need some fix)
async function mostSelledProduct() {
  const orders = await OrdersRepository.getOrders();
  console.log(orders);
  let listProducts = [];
  orders.pedidos
    .filter(order => order.entregue)
    .forEach(order => {
      const index = listProducts.findIndex(item => item.produto === order.produto);
      if (index === -1) {
        listProducts.push({ produto: order.produto, quantidade: 1 });
      } else {
        listProducts[index].quantidade++;
      }
    });
  listProducts.sort((a, b) => b.quantidade - a.quantidade);
  return listProducts.map(order => `${order.produto} - ${order.quantidade}`);
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
