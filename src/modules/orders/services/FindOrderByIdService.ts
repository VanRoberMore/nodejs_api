import AppErrors from '../../../shared/errors/AppErrors';
import Order from '../infra/typeorm/entities/Order';
import OrderRepository from '../infra/typeorm/repositories/OrderRepository';


export default class FindOrderByIdService {
    public async execute(order_id: number): Promise<Order | undefined> {
        const orderRepository = new OrderRepository();

        if (!Number(order_id)) {
            throw new AppErrors("ID not valid | Order not found", 404);
        }

        const orderById = await orderRepository.findById(Number(order_id));

        return orderById;
    }

}