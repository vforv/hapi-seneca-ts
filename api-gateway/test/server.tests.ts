import * as lab from 'lab';
import * as code from 'code';
import { StartServer } from '../server';
import { HapiServer } from '../sever-types';
import * as sinon from 'sinon';
import { PingLogic } from '../logic/ping/ping.logic';
import { RegisterRoutes } from '../plugins/routes/index';
  
  
const L = exports.lab = lab.script();
const expect = code.expect;
  
const S = new StartServer;
  
const server: any = S.server;
  
const testServer: any = S.connectServer(true);
  
L.before((done) => {
    // Callback fires once the server is initialized
    // or immediately if the server is already initialized
    server.labbableReady((err: any) => {
  
        if (err) {
            return done(err);
        }
  
        return done();
    });
});
  
L.experiment('Server started', () => {
    L.test('initializes.', (done) => {
  
        expect(server.isInitialized()).to.equal(true);
        done();
    });
  
    L.test('Ping route test', (done) => {
  
        sinon
            .stub(server.seneca, 'act')
            .yields(null, 'mock');
  
  
        server.inject('/v1/ping/formated', (response: any) => {
  
            expect(response.payload).to.equal('mock');
            done();
        });
    });
})

