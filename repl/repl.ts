import * as Seneca from 'seneca';
const repl = require('seneca-repl');

const HOST = process.env.HOST;
const REGISTRY = process.env.REGISTRY;

Seneca({ tag: 'repl' })
  // .test('print')
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
  .use(repl)
  .ready(() => {
    console.log("REPL service ready!!!")
  })
