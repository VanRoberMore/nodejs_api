import OrderDTO from '../dtos/OrderDTO';
import Order from '../infra/typeorm/entities/Order';


export default interface IOrderRepository {
    create(data: IOrderDTO): Promise<Order>;
    index(): Promise<Order[]>;
    findById(order_id: number): Promise<Order | undefined>;
    update(data: IOrderDTO): Promise<Order>;
    delete(order_id: number): Promise<DeleteResult>;
}