import ServicesOrder from '../services/delivery.services.js';

async function getOrders(req, res, next) {
  try {
    logger.info(`GET /orders`);
    res.send(await ServicesOrder.getOrders());
  } catch (error) {
    next(error);
  }
}
async function getOrderByID(req, res, next) {
  try {
    logger.info(`GET /orders by  :id`);
    res.send(await ServicesOrder.getOrderByID(req.params.id));
  } catch (error) {
    next(error);
  }
}
async function getOrdersByClient(req, res, next) {
  try {
    logger.info(`GET /orders  :client`);
    res.send(await ServicesOrder.getOrdersByClient(req.params.client));
  } catch (error) {
    next(error);
  }
}
async function getOrdersByProduct(req, res, next) {
  try {
    logger.info(`GET /orders  :product`);
    res.send(await ServicesOrder.getOrdersByProduct(req.params.product));
  } catch (error) {
    next(error);
  }
}
async function deleteOrder(req, res, next) {
  try {
    logger.info(`DELETE /order  :id`, req.params);
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
    logger.info('POST /order');
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
    logger.info('PUT /order');
  } catch (error) {
    next(error);
  }
}
async function updateOrderStatus(req, res, next) {
  try {
    let order = req.body;

    if (!order.id && !order.entregue !== null) {
      throw new Error('ID and status of delivery "entregue" are required!')
    }

    logger.info('PATCH /updateOrderStatus');
    res.send(await ServicesOrder.updateOrder(order));
  } catch (error) {
    next(error);
  }
}
async function mostSelledProduct(req, res, next) {
  logger.info('GET /mostSelledProduct');
  try {
    res.send(await ServicesOrder.mostSelledProduct());
    logger.info('GET /mostSelledProduct');
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