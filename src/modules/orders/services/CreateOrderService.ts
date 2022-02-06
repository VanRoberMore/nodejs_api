import IOrderDTO from '../dtos/IOrderDTO';
import Order from '../infra/typeorm/entities/Order';
import OrderRepository from '../infra/typeorm/repositories/OrderRepository';

import FindOrderByIdService from './FindOrderByIdService';


export default class CreateOrderService {
    const orderRepository = new OrderRepository();

    public async execute(data: IOrderDTO): Promise<Order> {
        const orderRepository = new orderRepository();

        const findOrderByIdService = new FindOrderByIdService();

        if (data.order_id) {
            throw new AppErrors("The ORDER_ID field should not be sent as it is handled by the DBMS!", 422);
        }

        await findOrderByIdService.execute(data.order_id);

        const newOrder = await this.orderRepository.create(data);

        return newOrder;
    }

}

