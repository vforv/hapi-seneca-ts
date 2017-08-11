import * as Seneca from 'seneca';
const repl = require('seneca-repl');

Seneca({ tag: 'repl' })
  // .test('print')
  .use('mesh')
  .use(repl)
  .ready(() => {
    console.log("REPL service ready!!!")
  })
