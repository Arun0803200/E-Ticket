import { MigrationInterface, QueryRunner, Table } from "typeorm"

const tableName = 'founder'
export class CreateFounder1679301663198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: tableName,
            columns: [
                {
                    name: 'founder_id',
                    type: 'INT',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'first_name',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: false,
                },
                {
                    name: 'last_name',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'email',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'username',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'password',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'mobile_no',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'theatre_name',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'theatre_url',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'comission',
                    type: "INT",
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'address_1',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'address_2',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'country',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'state',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'district',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'pin_code',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'approval_flag',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'is_active',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'delete_flag',
                    type: 'INT',
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
            ]
        });
        const ifTable = await queryRunner.hasTable(tableName);
        if(!ifTable){
            await queryRunner.createTable(table);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName, true);
    }

}
