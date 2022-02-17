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
        const updateOrder = await this.orderRepository.save(data);

        return updateOrder;
    }


    public async index(): Promise<Order[]> {
        const allOrders = await this.orderRepository.find();

        return allOrders;

    }

    public async findById(order_id: number): Promise<Order | undefined> {
        const orderById = await this.orderRepository
            .createQueryBuilder('order')
            .leftJoinAndSelect('order.order_products', 'op')
            .leftJoinAndSelect('op.product', 'p')
            .where('order.order_id = :order_id', { order_id })
            .getOne();  // getOne() retorna apenas um resultado

        return orderById;

    }

    public async delete(order_id: number): Promise<DeleteResult> {
        const deleteResult = await this.orderRepository.delete(Number(order_id));

        return deleteResult;

    }


}

