import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';


const ping = new PingLogic


Seneca({ tag: 'ping' })
  // .test('print')
  .use(ping.getPing)
  .use('mesh', {
    pin: 'role:ping,cmd:date',
    host: 'eth0',
    bases: 'base:39000'
  })
  .ready(() => {
    console.log("Ping service ready!!!")
  })
