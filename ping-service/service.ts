import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';


const ping = new PingLogic


Seneca({ tag: 'ping' })
  // .test('print')
  .use(ping.getPing)
  .use('mesh', {
    pin: 'role:ping,cmd:date'
  })
  .ready(() => {
    console.log("Ping service ready!!!")
  })
