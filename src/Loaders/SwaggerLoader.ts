import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import * as path from 'path';
import * as suaggerUi from 'swagger-ui-express';

export const swaggerLoader: MicroframeworkLoader = async(settings: MicroframeworkSettings) => {
    const expressApp = settings.getData('expressApp');
    const swaggerFile: any = {};
    swaggerFile.info = {
        title: process.env.APP_NAME,
        version: process.env.APP_VERSION,
    };
    swaggerFile.serer = [
        {
            url: 'http://localhost:8000/api'
        }
    ];

    expressApp.use(
        process.env.SWAGGER_ROUTE,
        suaggerUi.server,
        suaggerUi.setUp(swaggerFile)
    )
};
