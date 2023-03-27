import { table } from "console";
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateBookingTable1679451149576 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: 'booking_tbl',
            columns: [
                {
                    name: 'booking_id',
                    type: 'INT',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'cusromer_id',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'theatre_id',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'screen_id',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'seat_id',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'date',
                    type: 'DATE',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'start_time',
                    type: 'TIME',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'end_time',
                    type: 'TIME',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'created_by',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'created_date',
                    type: 'date',
                    default: 'CURRENT_TIMESTAMP',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'modified_by',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'modified_date',
                    type: 'date',
                    default: 'CURRENT_TIMESTAMP',
                    isPrimary: false,
                    isNullable: true,
                }
            ],
        });
        const ifTable = await queryRunner.hasTable('booking_tbl');
        if (!ifTable) {
            await queryRunner.createTable(table);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('booking_tbl', true);
    }
}
