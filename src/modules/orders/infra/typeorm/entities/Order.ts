import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import Order_Products from './Order_Products';
import Client from '../../../../clients/infra/typeorm/entities/Client';
@Entity('orders')

@Unique(['order_id'])

export default class Order {
    @PrimaryGeneratedColumn('increment')
    order_id!: number;

    @Column()
    client_id: number;

    @Column()
    date: Date;

    @Column()
    status: string;

    @Column()
    payment_method: string;

    @Column('float', { precision: 10, scale: 2 })
    order_value: number;

    @Column('float', { precision: 10, scale: 2 })
    discount: number;

    /**
   * Muitos produtos podem ter a mesma categoria
   */
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client : Client; // categoria não é um produto no banco de dados
    // representa o relacionamento

    @OneToMany(() => Order_Products, (order_products) => order_products.order, {cascade: true})
    order_products: Order_Products[];


    @CreateDateColumn({select: false})
    created_at: Date;

    @UpdateDateColumn({select:false})
    updated_at: Date;
    
}
