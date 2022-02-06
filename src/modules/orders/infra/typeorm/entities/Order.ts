import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import Order_Product from './Order_Product';
import Client from '../../../../clients/infra/typeorm/entities/Client';

@Entity('orders')
@Unique(['id'])
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

    @OneToMany(() => Order_Product, (order_product) => order_product.order, {cascade: true})
    order_product: Order_Product[];


    @Column()
    products: string;


    @CreateDateColumn({select: false})
    created_at: Date;

    @UpdateDateColumn({select:false})
    updated_at: Date;
    
}