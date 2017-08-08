import * as Seneca from 'seneca';

Seneca({ tag: 'ping' })
  // .test('print')
  .use('mesh', {
    monitor: true
  })
  .ready(() => {
    console.log("Monitor service ready!!!")
  })
