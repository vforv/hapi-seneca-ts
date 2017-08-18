import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';

const HOST = process.env.HOST;
const BASES = process.env.BASES;

const ping = new PingLogic


Seneca({ tag: 'ping' })
  // .test('print')
  .use(ping.getPing)
  .use('mesh', {
    pin: 'role:ping,cmd:date',
    host: HOST,
    bases: BASES
  })
  .ready(() => {
    console.log("Ping service ready!!!")
  })
