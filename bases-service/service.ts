import * as Seneca from 'seneca';


Seneca({tag: 'base'})
  // .test('print')
  .use('mesh', {
    isbase: true,
    pin:'role:mesh',
    sneeze: {
      silent: true,
      swim: {interval: 1111}
    }
  })
  .ready(function () {
    console.log("Bases ready!!!")
  })