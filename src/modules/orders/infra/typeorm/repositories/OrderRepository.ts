import { DeleteResult, Like, getRepository, Repository } from 'typeorm';
import IOrderDTO from '../../../dtos/IOrderDTO';
import IOrderRepository from '../../../repositories/IOrderRepository';

import Order from '../entities/Order';


export default class OrderRepository implements IOrderRepository {

    private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = getRepository(Order);
  }


    public async create(data: IOrderDTO): Promise<Order> {
        const order = this.orderRepository.create(data);

        await this.orderRepository.save(order);

        return order;
        }

    public async update(data: Partial<IOrderDTO>): Promise<Order> {
        const orderRepository = new OrderRepository();

        const updateOrder = await orderRepository.update(data);

        return updateOrder;
        
    }

    public async index(): Promise<Order[]> {
        const orderRepository = new OrderRepository();

        const allOrders = await orderRepository.index();

        return allOrders;

    }

    public async findById(order_id: number): Promise<Order | undefined> {
        const orderRepository = new OrderRepository();

        const orderById = await orderRepository.findById(Number(order_id));

        return orderById;

    }

    public async delete(order_id: number): Promise<DeleteResult> {
        const orderRepository = new OrderRepository();

        const deleteResult = await orderRepository.delete(Number(order_id));

        return deleteResult;

    }


}

