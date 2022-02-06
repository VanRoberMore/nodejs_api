import { Request, Response } from 'express';
import CreateOrderService from '../../../services/CreateOrderService';
import FindOrderByIdService from '../../../services/FindOrderByIdService';


class OrderController {
   async create(request: Request, response: Response): Promise<Response> {
      const data = request.body;

      const createOrderService = new CreateOrderService();

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

    const findOrderByIdService = new FindOrderByIdService();

    const orderById = await findOrderByIdService.execute(Number(order_id));

    return response.json(orderById);
}

async delete(request: Request, response: Response): Promise<Response> {
    const { order_id } = request.params;

    const orderRepository = new OrderRepository();

    const deleteOrder = await orderRepository.delete(Number(order_id));

    return response.json(deleteOrder);
}



}

export default new OrderController();
