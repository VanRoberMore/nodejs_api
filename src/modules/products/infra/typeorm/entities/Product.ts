import Category from '../../../../categories/infra/typeorm/entities/Category';

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import Order_Product from '../../../../orders/infra/typeorm/entities/Order_Product';

@Entity('products')
@Unique(['id'])
export default class Product {
    @PrimaryGeneratedColumn('increment')
    product_id!: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('float', {scale: 10, precision: 2})
    price: number;

    @Column()
    quantity: number;

    /**
   * Muitos produtos podem ter a mesma categoria
   */
    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({name: 'category_id'})
    category: Category;


    @Column()
    image: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}