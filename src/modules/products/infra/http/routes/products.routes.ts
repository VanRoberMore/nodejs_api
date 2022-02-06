import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

productsRouter.post('/', ProductsController.create);
productsRouter.put('/:product_id', ProductsController.update);
productsRouter.get('/', ProductsController.index);
productsRouter.get('/:product_id', ProductsController.findById);
productsRouter.delete('/:product_id', ProductsController.delete);


export default productsRouter;