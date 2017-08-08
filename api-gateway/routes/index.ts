
import { HapiServer } from '../sever-types';
import { PingRoutes } from './ping/ping.routes';

export function Routes(server: HapiServer) {
   let bootstrap: any = [];

   bootstrap.concat(new PingRoutes(server).pingRoutes())

   return bootstrap;
   
}