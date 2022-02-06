import { Router } from 'express';
import OrderController from "../controllers/OrderController";


const ordersRoutes = Router();

ordersRoutes.post('/', OrderController.create);
ordersRoutes.get('/', OrderController.index);
ordersRoutes.get('/:order_id', OrderController.findById);
ordersRoutes.delete('/', OrderController.delete);

export default ordersRoutes;


