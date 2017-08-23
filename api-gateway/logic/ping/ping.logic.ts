import * as Hapi from 'hapi';
import { HapiRequest } from '../../sever-types';
export class PingLogic {
    constructor() { }

    getPing(req: HapiRequest, reply: Hapi.ReplyNoContinue) {
        
       req.seneca
            .act(
            {
                role: 'ping',
                cmd: 'date',
                format: req.params.format
            },
            (err: any, out: any): any => {
                return reply(err || out)
            })
    }
}
