import { MigrationInterface, QueryRunner, Table, Tree } from "typeorm"

const tableName = 'theatre_tbl';
export class CreateTheatreTable1679367969010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: tableName,
            columns: [
                {
                    name: 'theatre_id',
                    type: 'INT',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'founder_id',
                    type: "INT",
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'approval_flag',
                    type: "INT",
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'licence_no',
                    type: "VARCHAR",
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'address_1',
                    type: 'varchar',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'address_2',
                    type: 'varchar',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'is_active',
                    type: "INT",
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'is_delete',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true,
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
            ]
        });
        const ifTable = await queryRunner.hasTable(tableName);
        if (!ifTable) {
            await queryRunner.createTable(table);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName, true);
    }

}
