import * as Seneca from 'seneca';
const repl = require('seneca-repl');

const HOST = process.env.HOST;
const HOST1 = process.env.HOST1;
const REGISTRY = process.env.REGISTRY;
const BASES = process.env.BASES;
const PORT = process.env.PORT;

Seneca({ tag: 'repl' })
  .use('mesh', {
    tag: null,
    auto: true,
    bases: [`${BASES}:39999`],
    host: HOST
  })
  .use(repl, {
    host: HOST1,
    port: PORT
  })
  .ready(() => {
    console.log("REPL service ready!!!")
  })
