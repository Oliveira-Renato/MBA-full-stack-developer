import ServicesOrder from '../services/delivery.services.js';

async function getOrders(req, res, next) {
  try {
    console.log(`GET /orders`);
    res.send(await ServicesOrder.getOrders());
  } catch (error) {
    next(error);
  }
}
async function getOrderByID(req, res, next) {
  try {
    console.log(`GET /orders  :id`);
    res.send(await ServicesOrder.getOrderByID(req.params.id));
  } catch (error) {
    next(error);
  }
}
async function getOrdersByClient(req, res, next) {
  try {
    console.log(`GET /orders  :client`);
    res.send(await ServicesOrder.getOrdersByClient(req.params.client));
  } catch (error) {
    next(error);
  }
}
async function getOrdersByProduct(req, res, next) {
  try {
    console.log(`GET /orders  :product`);
    res.send(await ServicesOrder.getOrdersByProduct(req.params.product));
  } catch (error) {
    next(error);
  }
}
async function deleteOrder(req, res, next) {
  try {
    console.log(`DELETE /order  :id`, req.params);
    res.send(await ServicesOrder.deleteOrder(req.params.id));
  } catch (error) {
    next(error);
  }
}
async function createOrder(req, res, next) {
  try {
    let order = req.body;
    if (order.cliente || order.produto || order.valor) {
      res.send(await ServicesOrder.createOrder(order));
    }
    console.log('POST /order');
  } catch (error) {
    next(error);
  }
}
async function updateOrder(req, res, next) {
  try {
    let order = req.body;
    if (order.id || order.cliente || order.produto || order.valor || order.entregue) {
      res.send(await ServicesOrder.updateOrder(order));
    }
    console.log('PUT /order');
  } catch (error) {
    next(error);
  }
}
async function updateOrderStatus(req, res, next) {
  try {
    let order = req.body;
    if (order.id && order.entregue) {
      res.send(await ServicesOrder.updateOrder(order));
    }
    console.log('PATCH /updateOrderStatus');
  } catch (error) {
    next(error);
  }
}
async function mostSelledProduct(req, res, next) {
  try {
    res.send(await ServicesOrder.mostSelledProduct());
    console.log('GET /mostSelledProduct');
  } catch (error) {
    next(error);
  }
}

export default {
  getOrders,
  getOrderByID,
  getOrdersByClient,
  getOrdersByProduct,
  deleteOrder,
  createOrder,
  updateOrder,
  updateOrderStatus,
  mostSelledProduct
}