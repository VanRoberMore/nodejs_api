import Order from '../infra/typeorm/entities/Order';
import OrderRepository from '../repositories/OrderRepository';


export default class FindAllOrdersService {
    public async execute(): Promise<Order[]> {
        const orderRepository = new OrderRepository();

        const allOrders = await orderRepository.index();

        return allOrders;
    }
}