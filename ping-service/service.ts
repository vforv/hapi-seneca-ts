import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';

const HOST = process.env.HOST;
const BASES = process.env.BASES;
const BROADCAST = process.env.BROADCAST
const REGISTRY = process.env.REGISTRY

const ping = new PingLogic


Seneca()
  // .test('print')
  .use(ping.getPing)
  .use('registry-consul',{host: REGISTRY, port:"8500"})
  .use('mesh', {
    auto: true,
    host: HOST,
    bases: [`${BASES}:39999`],
    discover: {
      // multicast: {
      //   address: BROADCAST
      // },
      registry: {host: REGISTRY, port: "8500"}
    },
    dumpnet: false,
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
