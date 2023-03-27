import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

const tableName = 'screen_tbl';
export class CreateScreenTable1679419958301 implements MigrationInterface {
    private foreignKey = new TableForeignKey({
        name: 'fk_screen_table',
        columnNames: ['theatre_id'],
        referencedColumnNames: ['theatre_id'],
        referencedTableName: 'theatre_tbl',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: tableName,
            columns: [
                {
                    name: 'screen_id',
                    type: 'INT',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'theatre_id',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'no_of_columns',
                    type: 'INT',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'no_of_rows',
                    type: 'INT',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'date',
                    type: 'DATE',
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
            ]
        });
        const ifTable = await queryRunner.hasTable(tableName);
        if (!ifTable) {
            await queryRunner.createTable(table);
        }
        const getTable = await queryRunner.getTable(tableName);
        const foreignLKey = getTable.foreignKeys.find(fk => fk.columnNames.indexOf('theatre_id') !== -1);
        if (!foreignLKey) {
            await queryRunner.createForeignKey(getTable, this.foreignKey);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const getTable = await queryRunner.getTable('screen_tbl');
        const foreignLKey = getTable.foreignKeys.find(fk => fk.columnNames.indexOf('theatre_id') !== -1);
        await queryRunner.dropTable('screen_tbl', true);
        if (!foreignLKey) {
            await queryRunner.dropForeignKey(getTable, this.foreignKey);
        }
    }

}
