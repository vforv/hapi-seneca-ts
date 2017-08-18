import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';

const HOST = process.env.HOST;
const BASES = process.env.BASES;
const TAG = process.env.TAG;

const ping = new PingLogic


Seneca({ tag: TAG })
  // .test('print')
  .use(ping.getPing)
  .use('mesh', {
    pin: 'role:ping,cmd:date',
    host: HOST,
    bases: [BASES]
  })
  .ready(() => {
    console.log("Ping service ready!!!")
  })
