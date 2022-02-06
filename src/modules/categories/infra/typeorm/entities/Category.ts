import Product from '../../../../products/infra/typeorm/entities/Product';

import {
Entity,
Column,
PrimaryGeneratedColumn,
CreateDateColumn,
UpdateDateColumn,
OneToMany,
} from 'typeorm';

@Entity('categories')

export default class Category {
    @PrimaryGeneratedColumn('increment')
    category_id!: number;

    @Column()
    description: string;

    /**
   * Uma categoria pode ter muitos produtos
   */
    @OneToMany(() => Product, (product) => product.category)
    products: Product[]; // produtos não é uma coluna do banco de dados
    // representa o relacionamento

    @Column()
    comments: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}