import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRoutes = Router();

productsRoutes.post('/', ProductsController.create);
productsRoutes.put('/:product_id', ProductsController.update);
productsRoutes.get('/', ProductsController.index);
productsRoutes.get('/:product_id', ProductsController.findById);
productsRoutes.delete('/:product_id', ProductsController.delete);


export default productsRoutes;