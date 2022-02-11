import AppErrors from '../../../shared/errors/AppErrors';
import Order from '../infra/typeorm/entities/Order';
import OrderRepository from '../infra/typeorm/repositories/OrderRepository';


export default class FindOrderByIdService {
    public async execute(order_id: number): Promise<Order> {
        const orderRepository = new OrderRepository();

        const orderById = await orderRepository.findById(Number(order_id));

        if (!orderById) {
            throw new AppErrors("ORDER_ID not valid | Order not found", 404);
        }
        
        return orderById;
    }

}
