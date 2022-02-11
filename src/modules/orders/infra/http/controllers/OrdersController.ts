import AppErrors from '../../../../../shared/errors/AppErrors';

import { Request, Response } from 'express';
import OrderRepository from '../../typeorm/repositories/OrderRepository';

import CreateOrderService from '../../../services/CreateOrderService';
import FindOrderByIdService from '../../../services/FindOrderByIdService';
import UpdateOrderService from '../../../services/UpdateOrderService';


class OrderController {
   async create(request: Request, response: Response): Promise<Response> {
      const data = request.body;

      const createOrder = new CreateOrderService();

      const newOrder = await createOrder.execute(data);

      return response.json(newOrder);
}

    async index(request: Request, response: Response): Promise<Response> {
        const orderRepository = new OrderRepository();
        const allOrders = await orderRepository.index();

        return response.json(allOrders);
    }

async findById(request: Request, response: Response): Promise<Response> {
    const { order_id } = request.params;

    const findOrderById = new FindOrderByIdService();

    const orderById = await findOrderById.execute(Number(order_id));

    return response.json(orderById);
}

async update(request: Request, response: Response): Promise<Response> {
    const { order_id } = request.params;
    const data = request.body;

    const updateOrder = new UpdateOrderService();
    
    const orderToUpDate = {...data, id: Number(order_id)};

    const orderUpdated = await updateOrder.execute(orderToUpDate);

    return response.json(orderUpdated);
       
}


async delete(request: Request, response: Response): Promise<Response> {
    const { order_id } = request.params;

    const orderRepository = new OrderRepository();

    const deleteOrder = await orderRepository.delete(Number(order_id));

    return response.json(deleteOrder);
}



}

export default new OrderController();
