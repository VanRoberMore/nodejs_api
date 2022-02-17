import Product from "../../../../products/infra/typeorm/entities/Product"

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,

} from "typeorm";

import Order from "./Order"


@Entity('order_products')

export default class Order_Products {
    
        @PrimaryGeneratedColumn('increment')
        order_id!: number;
     
        @Column()
        product_id: number;
    
        @Column()
        quantity: number;

        @ManyToOne(() => Order, (order) => order.order_products, {orphanedRowAction: "delete"})
        @JoinColumn({ name: 'order_id' }) 
        order: Order;

        @ManyToOne(() => Product, (product) => product.order_products, {orphanedRowAction: "delete"})
        @JoinColumn({ name: "product_id" })
        product: Product;
    
        @Column()
        price: number;
    
        @Column()
        total: number;

        @CreateDateColumn({ select: false })
        created_at: Date;
      
        @UpdateDateColumn({ select: false })
        updated_at: Date;

}

