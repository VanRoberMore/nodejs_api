import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProducts1644104440994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            new Table({
                name: "products",
                columns:[
                    {
                        name: "product_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "85",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "150",
                        isNullable: false,
                    },
                    {
                        name: "price",
                        type: "float",
                        precision: 10,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "quantity",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "category_id", // nome da coluna que será chave estrangeira
                        type: "int", // mesmo tipo do id da tabela categorias
                        isNullable: false,
                    },
                    {
                        name: "image",
                        type: "varchar",
                        isNullable: false,
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

                    }]

                }

            )

        );

                // cria uma nova chave estrangeira
                await queryRunner.createForeignKey(
                    'products', // nome da tabela que será criada a chave estrangeira
                    new TableForeignKey({
                        columnNames: ['category_id'],
                        referencedColumnNames: ['category_id'],
                        referencedTableName: 'categories',
                        onDelete: 'SET NULL',
                    }),
                )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
