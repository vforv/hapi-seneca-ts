import * as Seneca from 'seneca';


Seneca({tag: 'base'})
  // .test('print')
  .use('mesh', {
    isbase: true,
    port: 39999,
    host: '@eth0',
    // bases: 'base:39999',
    pin:'role:mesh',
    sneeze: {
      silent: true,
      swim: {interval: 1111}
    }
  })
  .ready(function () {
    console.log("Bases ready!!!")
  })