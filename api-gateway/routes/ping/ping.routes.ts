import * as Joi from 'joi';
import { HapiServer } from '../../sever-types';
import { PingLogic } from '../../logic/ping/ping.logic';
import { pingValidator } from '../../validators/ping/ping.validators';
import * as Hapi from 'hapi';
import { RoutesClass } from '../index';



export class PingRoutes implements RoutesClass {
    public pingLogic = new PingLogic;

    constructor(public server: any) {
    }

    register(): any {
        return [
            {
                register: this.server.route({
                    method: 'GET',
                    path: '/ping/{format}',
                    handler: this.pingLogic.getPing,
                    config: {
                        description: 'This is ping route',
                        tags: ['api', 'v1', 'ping route'],
                        validate: {
                            params: pingValidator
                        }
                    }
                })
            }
        ]

    }
}