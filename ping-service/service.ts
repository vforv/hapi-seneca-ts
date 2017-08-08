import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';


const ping = new PingLogic


Seneca({ tag: 'ping' })
  // .test('print')
  .use(ping.getPing)
  .use('mesh', {
    pin: 'role:ping,cmd:date',
    bases: ['127.0.0.1']
  })
  .ready(() => {
    console.log("Ping service ready!!!")
  })
