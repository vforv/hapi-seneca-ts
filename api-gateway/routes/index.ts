
import { HapiServer } from '../sever-types';
import { PingRoutes } from './ping/ping.routes';


export abstract class RoutesClass {
    public abstract register(): any[];
}


/**
 * To add new group of routes go to plugins/routes/index.ts
 */
export class RoutesFactory implements RoutesClass {
    private routes: any[] = [];

    constructor(routes: RoutesClass) {
        this.routes.concat(routes.register());
    }

    public register(): any {
        return this.routes;
    }

}
