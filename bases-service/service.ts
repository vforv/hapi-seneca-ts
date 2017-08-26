import * as Seneca from 'seneca';

const HOST = process.env.HOST;
// const BROADCAST = process.env.BROADCAST;
const REGISTRY = process.env.REGISTRY;

Seneca()
  // .test('print')
  .use('mqlight-transport', {})
  .use('mesh', {
    isbase: true,
    host: HOST,
    pin: 'role:mesh',
    sneeze: {
      silent: true,
      swim: { interval: 1111 }
    }
  })
  .listen({
    type: 'mqlight',
    host: HOST
  })
  .ready(function () {
    console.log("Bases ready!!!")
  })