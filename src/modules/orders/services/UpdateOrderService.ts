import AppErrors from '../../../shared/errors/AppErrors';
import IOrderDTO from '../dtos/IOrderDTO';
import Order from '../infra/typeorm/entities/Order';
import OrderRepository from '../infra/typeorm/repositories/OrderRepository';

import FindOrderByIdService from './FindOrderByIdService';



export default class CreateOrderService {
    public async execute(data: IOrderDTO): Promise<Order> {
        const orderRepository = new OrderRepository();

        const findOrderById = new FindOrderByIdService();

        await findOrderById.execute(Number(data.order_id));

        const orderPatch = await orderRepository.update(data);

        return orderPatch;
    }
}
