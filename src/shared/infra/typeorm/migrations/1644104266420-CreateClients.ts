import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1644104266420 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "id",
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
                        name: "cpf",
                        type: "varchar",
                        length: "11",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "85",
                        isNullable: false,
                    },
                    {
                        name: "telephone",
                        type: "varchar",
                        length: "11",
                        isNullable: false,
                    },
                    {
                        name: "birth_date",
                        type: "date",
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
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients");
    }

}
