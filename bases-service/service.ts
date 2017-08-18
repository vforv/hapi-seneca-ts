import * as Seneca from 'seneca';

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const BASES = process.env.BASES;
const TAG = process.env.TAG;

Seneca({tag: TAG})
  // .test('print')
  .use('mesh', {
    isbase: true,
    port: PORT,
    host: HOST,
    bases: [BASES],
    pin:'role:mesh',
    sneeze: {
      silent: true,
      swim: {interval: 1111}
    }
  })
  .ready(function () {
    console.log("Bases ready!!!")
  })