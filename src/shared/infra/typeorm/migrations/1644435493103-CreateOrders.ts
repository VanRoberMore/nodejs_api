import {
        MigrationInterface,
        QueryRunner,
        Table,
        TableForeignKey,
} from 'typeorm';

export class CreateOrders1644435493103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "order_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "client_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "status",
                        type: "varchar",
                        length: "85",
                        isNullable: false,
                    },
                    {
                        name: "payment_method",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "order_value",
                        type: "float",
                        precision: 10,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "discount",
                        type: "float",
                        precision: 4,
                        scale: 2,
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        );

        // chave estrangeira
        await queryRunner.createForeignKey(
            "orders",
            new TableForeignKey({
                name: "ClientId",
                columnNames: ["client_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "clients",
                onDelete: "SET NULL",
            }),
        );
    }
    


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}
