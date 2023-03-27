import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {Application} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {useExpressServer} from 'routing-controllers';
import * as controllerIndex from '../api/common-index/Controller-index';

export const expressLoader: MicroframeworkLoader =  (settings: MicroframeworkSettings) => {
    if (settings) {
        const app = express();
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        app.use(bodyParser.json({limit: '50mb'}));
        const expressApp: Application = useExpressServer(app, {
            cors: true,
            routePrefix: process.env.ROUTE_PREFIX,
            defaultErrorHandler: true,
            classTransformer: true,
            controllers: Object.values(controllerIndex),
        });        
        const expressServer = expressApp.listen(process.env.PORT);
        settings.setData('expressApp', expressApp);
        settings.setData('expressServer', expressServer);
     }
}
