import { MicroframeworkSettings, MicroframeworkLoader } from "microframework";
import { Token } from "../api/models/Token";
import { getConnectionOptions, createConnection } from "typeorm";
import * as Migration from "../../src/api/common-index/Migration"
import { User } from "../api/models/User";
export const typeormLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings) => {  
    const loaderOption: any = await getConnectionOptions();    
    const connectionOptions: any = Object.assign(loaderOption, {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        database: 'arundhika',
        password: '',
        synchronize: false,
        logging: true,
        entities: [User, Token],
        migrations: Object.values(Migration),
        cli: {
            migrationsDir: './src/database/Migrations'
        }
    });
    const connection = await createConnection(connectionOptions)    
    connection.runMigrations();
    if (settings) {
        settings.setData('connection', connection)
    }
}
