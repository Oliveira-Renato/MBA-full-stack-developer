import express from 'express';
import OrdersController from '../controllers/delivery.controller.js';

const router = express.Router();
router.use(express.json());

router.get('/', OrdersController.getOrders);
router.get('/:id', OrdersController.getOrderByID);//task 5
router.get('/client/:client', OrdersController.getOrdersByClient);//task 6
router.get('/product/:product', OrdersController.getOrdersByProduct);//task 7
router.delete('/deleteOrder/:id', OrdersController.deleteOrder);//task 4
router.post('/createOrder', OrdersController.createOrder);//task 1
router.put('/updateOrder', OrdersController.updateOrder);//task 2
router.patch('/updateOrderStatus', OrdersController.updateOrderStatus);//task 3
//TO GET TOTAL VALUE OF ORDERS by A PRODUCT
//router.get('/',);
router.use((err, req, res, nex) => {
  console.log(`${req.method} ${req.baseUrl} ${err.message}`);
  res.status(400).send({ error: err.message });
})

export default router;