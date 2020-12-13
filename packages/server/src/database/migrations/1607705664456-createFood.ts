import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFood1607705664456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'foods',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',

                },
                {
                    name: 'image_url',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('foods');
    }

}
