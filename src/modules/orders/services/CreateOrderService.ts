import AppErrors from '../../../shared/errors/AppErrors';

import Product from '../../products/infra/typeorm/entities/Product';

import FindProductByIdService from '../../products/services/FindProductByIdService';
import UpdateProductService from '../../products/services/UpdateProductService';

import IOrderDTO from '../dtos/IOrderDTO';

import Order from '../infra/typeorm/entities/Order';
import OrderRepository from '../../orders/infra/typeorm/repositories/OrderRepository';




export default class CreateOrderService {
   public async execute(data: IOrderDTO): Promise<Order> {
        const orderRepository = new OrderRepository();
    
        const findProductById = new FindProductByIdService();
        const updateProduct = new UpdateProductService();

        const productsList: Array<Product> = [];
        let amountProducts = 0;

        if (data.order_products.length === 0) {
               throw new AppErrors("No PRODUCTS in Order ! ! ---> The ORDER_PRODUCTS list is empty!", 404);
            }

            for (let p = 0; p < data.order_products.length; p++) {
               productsList[p] = await findProductById.execute(data.order_products[p].product_id);

               if (data.order_products[p].quantity <= 0) {
                   throw new AppErrors("The QUANTITY of products is invalid!", 404);
               }

               if (data.order_products[p].quantity <= productsList[p].quantity) {
                    productsList[p].quantity -= data.order_products[p].quantity;
                    await updateProduct.execute(productsList[p]);
                } else {
                    throw new AppErrors("Not enough products in stock!", 404);
                }
    
                amountProducts += productsList[p].price * data.order_products[p].quantity;
               
                }
    
            
        data.order_value = amountProducts - data.discount;

        const newOrder = await orderRepository.create(data);
    
        return newOrder;
   }
}

