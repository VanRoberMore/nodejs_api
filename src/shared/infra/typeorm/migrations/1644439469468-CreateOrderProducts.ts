import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class CreateOrderProducts1644439469468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "order_products",
                columns: [
                    {
                        name: "order_products_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "order_id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "product_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "quantity",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    new TableForeignKey({
                        name: "OrderProducts_Order",
                        columnNames: ["order_id"],
                        referencedColumnNames: ["order_id"],
                        referencedTableName: "orders",
                        onDelete: "CASCADE",
                    }),
                    new TableForeignKey({
                        name: "OrderProducts_Product",
                        columnNames: ["product_id"],
                        referencedColumnNames: ["product_id"],
                        referencedTableName: "products",
                        onDelete: "CASCADE",
                    }),
                ],
            }),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("order_products");
    }

}
