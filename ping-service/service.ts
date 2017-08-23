import * as Seneca from 'seneca';
import { PingLogic } from './logic/ping.logic';

const HOST = process.env.HOST;
const BASES = process.env.BASES;
const BROADCAST = process.env.BROADCAST
const REGISTRY = process.env.REGISTRY

const ping = new PingLogic


Seneca()
  // .test('print')cd 
  .use(ping.getPing)
  .use('consul-registry', {
    host: REGISTRY,
    port: "8500"
  })
  .use('mesh', {
    auto: true,
    host: HOST,
    // bases: [`${BASES}:39999`],
    discover: {
      // multicast: {
      //   address: BROADCAST
      // },
      // registry: {
      //   host: '127.0.0.1',
      //   port: "39999"
      // }
      registry: {
        active: true
      }
    },
    dumpnet: false,
    // listen: [
    //   {
    //     pin: 'role:ping,cmd:date',
    //     host: HOST
    //   }
    // ]
  })
  .ready(() => {
    console.log("Ping service ready!!!")
  })
