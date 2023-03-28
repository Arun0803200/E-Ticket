import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

const tableName = 'seat_tbl'
export class createSeatTable1679448906331 implements MigrationInterface {

    private foreignKeys = new TableForeignKey({
        name: 'fk_seat_table',
        columnNames: ['screen_id'],
        referencedColumnNames: ['screen_id'],
        referencedTableName: 'screen_tbl',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: tableName,
            columns: [
                {
                    name: 'seat_id',
                    type: 'INT',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'screen_id',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'is_booking',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'movie_name',
                    type: 'VARCHAR',
                    length: '225',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'date',
                    type: 'date',
                    isPrimary: false,
                    isNullable: true,
                },
                {
                    name: 'start_time',
                    type: 'time',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'end_time',
                    type: 'time',
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
        if (!ifTable) {
            await queryRunner.createTable(table);
        }
        const getTable = await queryRunner.getTable(tableName);
        const ifForeignKey = getTable.foreignKeys.find(fk => fk.columnNames.indexOf('screen_id')!==-1);
        if (!ifForeignKey) {
            await queryRunner.createForeignKey(getTable, this.foreignKeys);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName);
        const getTable = await queryRunner.getTable(tableName);
        const ifForeignKey = getTable.foreignKeys.find(fk => fk.columnNames.indexOf('screen_id')!==-1);
        if (!ifForeignKey) {
            await queryRunner.createForeignKey(getTable, this.foreignKeys);
        }
    }

}
