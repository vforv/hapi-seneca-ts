import * as Hapi from 'hapi';
import { HapiRequest } from '../../sever-types';

export class PingLogic {
    constructor() { }

    getPing(req: HapiRequest, reply: Hapi.ReplyNoContinue) {

        req.seneca
            .client({
                id: "SenecaClient",
                type: 'mqlight',
                pins: [
                    'role:ping,cmd:*'
                ]
            }
            )
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
