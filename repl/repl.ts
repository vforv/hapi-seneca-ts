import * as Seneca from 'seneca';
const repl = require('seneca-repl');

const HOST = process.env.HOST;
const HOST1 = process.env.HOST;
const REGISTRY = process.env.REGISTRY;
const BASES = process.env.BASES;

Seneca({ tag: 'repl' })
  .use('mesh', {
    tag: null,
    auto: true,
    bases: [`${BASES}:39999`],
    host: HOST
  })
  .use(repl, {
    host: HOST1,
    port: '10001'
  })
  .ready(() => {
    console.log("REPL service ready!!!")
  })
