import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';

const HOST = process.env.HOST;
const BASES = process.env.BASES;

const ping = new PingLogic


Seneca()
  // .test('print')
  .use(ping.getPing)
  .use('mesh', {
    auto: true,
    host: HOST,
    bases: [`${BASES}:39999`],
    listen: [
      {
        pin: 'role:ping,cmd:date',
        host: HOST
      }
    ]
  })
  .ready(() => {
    console.log("Ping service ready!!!")
  })
