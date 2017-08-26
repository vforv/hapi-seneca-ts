"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Seneca = require("seneca");
var repl = require('seneca-repl');
var HOST = process.env.HOST;
var HOST1 = process.env.HOST1;
var REGISTRY = process.env.REGISTRY;
var BASES = process.env.BASES;
var PORT = process.env.PORT;
Seneca({ tag: 'repl' })
    .use('mesh', {
    tag: null,
    auto: true,
    bases: [BASES + ":39999"],
    host: HOST
})
    .use(repl, {
    host: HOST1,
    port: PORT
})
    .ready(function () {
    console.log("REPL service ready!!!");
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL3JlcGwvcmVwbC50cyIsInNvdXJjZXMiOlsiL2hvbWUvbWFzdGVyL0RvY3VtZW50cy9IYXBpL2hhcGktc2VuZWNhLXRzL3JlcGwvcmVwbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFpQztBQUNqQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFcEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDOUIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDaEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDdEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDaEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFOUIsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDO0tBQ3BCLEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDWCxHQUFHLEVBQUUsSUFBSTtJQUNULElBQUksRUFBRSxJQUFJO0lBQ1YsS0FBSyxFQUFFLENBQUksS0FBSyxXQUFRLENBQUM7SUFDekIsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFDO0tBQ0QsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNULElBQUksRUFBRSxLQUFLO0lBQ1gsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFDO0tBQ0QsS0FBSyxDQUFDO0lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RDLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VuZWNhIGZyb20gJ3NlbmVjYSc7XG5jb25zdCByZXBsID0gcmVxdWlyZSgnc2VuZWNhLXJlcGwnKTtcblxuY29uc3QgSE9TVCA9IHByb2Nlc3MuZW52LkhPU1Q7XG5jb25zdCBIT1NUMSA9IHByb2Nlc3MuZW52LkhPU1QxO1xuY29uc3QgUkVHSVNUUlkgPSBwcm9jZXNzLmVudi5SRUdJU1RSWTtcbmNvbnN0IEJBU0VTID0gcHJvY2Vzcy5lbnYuQkFTRVM7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVDtcblxuU2VuZWNhKHsgdGFnOiAncmVwbCcgfSlcbiAgLnVzZSgnbWVzaCcsIHtcbiAgICB0YWc6IG51bGwsXG4gICAgYXV0bzogdHJ1ZSxcbiAgICBiYXNlczogW2Ake0JBU0VTfTozOTk5OWBdLFxuICAgIGhvc3Q6IEhPU1RcbiAgfSlcbiAgLnVzZShyZXBsLCB7XG4gICAgaG9zdDogSE9TVDEsXG4gICAgcG9ydDogUE9SVFxuICB9KVxuICAucmVhZHkoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUkVQTCBzZXJ2aWNlIHJlYWR5ISEhXCIpXG4gIH0pXG4iXX0=