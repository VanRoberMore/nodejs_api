import { DeleteResult } from 'typeorm';
import AppErrors from '../../../shared/errors/AppErrors';
import OrderRepository from '../repositories/OrderRepository';

import FindOrderByIdService from './FindOrderByIdService';


export default class DeleteOrderService {
    public async execute(data: IOrderDTO): Promise<DeleteResult> {
        const orderRepository = new OrderRepository();

        if (!Number(order_id)) {
            throw new AppErrors("ID not valid | Order not found", 404);
        }

        const findOrderById = new FindOrderByIdService();

        await findOrderById.execute(Number(order_id));

        const deleteResult = await orderRepository.delete(Number(order_id));

        return deleteResult;
    }
}