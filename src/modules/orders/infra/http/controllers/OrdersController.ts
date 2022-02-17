import AppErrors from '../../../../../shared/errors/AppErrors';
import { Request, Response } from 'express';
import { DeleteResult} from 'typeorm';

import CreateOrderService from '../../../services/CreateOrderService';
import UpdateOrderService from '../../../services/UpdateOrderService';
import FindAllOrdersService from '../../../services/FindAllOrdersService';
import FindOrderByIdService from '../../../services/FindOrderByIdService';
import DeleteOrderService from '../../../services/DeleteOrderService';

class OrderController {
   async create(request: Request, response: Response): Promise<Response> {
      const data = request.body;

      const createOrder = new CreateOrderService();
      const newOrder = await createOrder.execute(data);

      return response.json(newOrder);
}

    async index(request: Request, response: Response): Promise<Response> {
        const findAllOrders = new FindAllOrdersService();
        const allOrders = await findAllOrders.execute();

        return response.json(allOrders);
    }

async findById(request: Request, response: Response): Promise<Response> {
    const { order_id } = request.params;

    const findOrderById = new FindOrderByIdService();

    const orderById = await findOrderById.execute(Number(order_id));

    return response.json(orderById);
}

async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const { order_id } = request.params;
    
    const updateOrder = new UpdateOrderService();
    
    const orderToUpDate = {...data, id: Number(order_id)};

    const orderUpdated = await updateOrder.execute(orderToUpDate);

    return response.json(orderUpdated);
       
}


async delete(request: Request, response: Response): Promise<Response> {
    const { order_id } = request.params;

    const deleteOrder = new DeleteOrderService();

    const deleteResult = await deleteOrder.execute(Number(order_id));

    return response.json(deleteResult);
}



}

export default new OrderController();
