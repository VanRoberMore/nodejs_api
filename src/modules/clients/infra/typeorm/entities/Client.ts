import{
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
} from 'typeorm';

@Entity('clients')
@Unique(['cpf'])
export default class Client {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    birth_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

