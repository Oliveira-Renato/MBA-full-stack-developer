import express from 'express';
import OrdersController from '../controllers/delivery.controller.js';

const router = express.Router();
router.use(express.json());

router.get('/', OrdersController.getOrders);
router.get('/mostSelledProduct', OrdersController.mostSelledProduct);
router.get('/:id', OrdersController.getOrderByID);
router.get('/client/:client', OrdersController.getOrdersByClient);
router.get('/product/:product', OrdersController.getOrdersByProduct);
router.delete('/deleteOrder/:id', OrdersController.deleteOrder);
router.post('/createOrder', OrdersController.createOrder);//task 1
router.put('/updateOrder', OrdersController.updateOrder);//task 2
router.patch('/updateOrderStatus', OrdersController.updateOrderStatus);//task 3

router.use((err, req, res, nex) => {
  console.log(`${req.method} ${req.baseUrl} ${err.message}`);
  res.status(400).send({ error: err.message });
})

export default router;