import * as Seneca from 'seneca';

const HOST = process.env.HOST;
const BROADCAST = process.env.BROADCAST
const REGISTRY = process.env.REGISTRY

Seneca()
  // .test('print')
  .use('consul-registry', {
    host: REGISTRY,
    port: "8500"
  })
  .use('mesh', {
    isbase: true,
    host: HOST,
    // pin: 'role:mesh',
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
    sneeze: {
      silent: true,
      swim: { interval: 1111 }
    }
  })
  .ready(function () {
    console.log("Bases ready!!!")
  })