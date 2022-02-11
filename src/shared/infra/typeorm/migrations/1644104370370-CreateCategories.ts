import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1644104370370 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns:[
                    {
                        name: "category_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "150",
                        isNullable: false,
                    },
                    {
                        name: "comments",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",  // timestamp
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",  // timestamp
                        default: "now()",
                    },
                ],  // columns
            }),                

        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }
}
