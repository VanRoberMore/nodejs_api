import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import Order_Products from '../../../../orders/infra/typeorm/entities/Order_Products';
import Category from '../../../../categories/infra/typeorm/entities/Category';

@Entity('products')

export default class Product {
    @PrimaryGeneratedColumn('increment')
    product_id!: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column('float', {scale: 10, precision: 2})
    price: number;

    @Column()
    quantity: number;

    @Column()
    category_id: number;

    /**
   * Muitos produtos podem ter a mesma categoria
   */
    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({name: 'category_id'})
    category: Category;

    @OneToMany(() => Order_Products, (order_products) => order_products.product)
    order_products: Order_Products[];

    @CreateDateColumn({ select: false })
    created_at: Date;

    @UpdateDateColumn({ select: false })
    updated_at: Date;


}
