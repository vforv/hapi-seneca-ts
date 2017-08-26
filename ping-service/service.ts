import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';

const HOST = process.env.HOST;
const BASES = process.env.BASES;
// const BROADCAST = process.env.BROADCAST
const REGISTRY = process.env.REGISTRY

const ping = new PingLogic


Seneca({
  logger: require('seneca-demo-logger'),
  debug: { short_logs: true }
}
)
  // .test('print')cd 
  .use(ping.getPing)
  .use('mqlight-transport', {})
  .use('mesh', {
    auto: true,
    host: HOST,
    pin: 'role:ping,cmd:date',
    bases: [`${BASES}:39999`]
  })
  .listen({
    type: 'mqlight',
    host: HOST
  })
  .ready(() => {
    console.log(`Ping service ready!!! IP: ${HOST}`)
  })
