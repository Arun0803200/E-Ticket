import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import * as express from 'express';

export const homeLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings) => {
    if (settings) {
        const expressApp = settings.getData('expressApp');
        expressApp.get(process.env.ROUTE_PREFIX, (req: express.request, res: express.response) => {
            return res.json({
                name: 'eticket',
                ersion: 'V1.0.1'
            })
        })
    }
}
