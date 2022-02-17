import { Router } from 'express';
import OrdersController from "../controllers/OrdersController";


const ordersRoutes = Router();

ordersRoutes.post('/', OrdersController.create);
ordersRoutes.get('/', OrdersController.index);
ordersRoutes.get('/:order_id', OrdersController.findById);
ordersRoutes.put('/:order_id', OrdersController.update);
ordersRoutes.delete('/:order_id', OrdersController.delete);

export default ordersRoutes;

