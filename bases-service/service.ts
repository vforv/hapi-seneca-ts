import * as Seneca from 'seneca';

const HOST = process.env.HOST;

Seneca()
  // .test('print')
  .use('mesh', {
    isbase: true,
    host: HOST,
    pin:'role:mesh',
    sneeze: {
      silent: true,
      swim: {interval: 1111}
    }
  })
  .ready(function () {
    console.log("Bases ready!!!")
  })