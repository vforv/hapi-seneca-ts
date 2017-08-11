#Installation

Install typescript
tsc -v
Version 2.4.2

Go to system dir: cd system and follow steps...

1. npm install
2. npm run fuge
3. apply npm i
4. watch all
5. start all

Server will start on: localhost:5000

Ping route: localhost:5000/v1/ping/formated

To see more options for fuge type in shell help.

To test service go to service and run npm run test.

Ex.
cd api-gateway
npm run test

To run with docker-compose:

go to system/fuge and run:
docker-compose up

#Debuging with REPL:

Repl use to call messages directly from console.

To run repl you need first to install rlwrap.

For Ubuntu:
sudo apt install rlwrap

and to run services.

After that go to system folder and type:
npm run repl

To test it type in console:
role:ping,cmd:date,format:formated
