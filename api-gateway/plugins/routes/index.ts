import { PingRoutes } from '../../routes/ping/ping.routes';
import { Routes } from '../../routes/index';
import { HapiServer, IRegister } from '../../sever-types';

export class RegisterRoutes {
    constructor() {
        this.register.attributes = {
            pkg: require('../../package.json')
        };
    }

    register: IRegister = (server: HapiServer, options: any, next: any) => {
        server.bind(this);
        
        Routes(server);
        
        this._register(server, {});
        next();
    };

    private _register(server: HapiServer, options: any) {
        // Register
        return 'register';
    }

    errorInit(error: any) {
        if (error) {
            console.log('Error: Failed to load plugin (RegisterRoutes):', error);
        }
    }
}