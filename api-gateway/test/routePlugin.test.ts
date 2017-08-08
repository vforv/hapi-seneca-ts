import * as lab from 'lab';
import * as code from 'code';
import * as sinon from 'sinon';
import * as Hapi from 'hapi';
import { RegisterRoutes } from '../plugins/routes/index';


const L = exports.lab = lab.script();
const expect = code.expect;
const server: any = new Hapi.Server();

const plugin = new RegisterRoutes;



L.before((done) => {
    server.connection();
    server.register(plugin, function (err: any) {
        if (err) {
            return done(err);
        }



        return done();
    });
});


L.experiment('Route plugin', () => {

    L.test('Route plugin should work', (done) => {

        expect(plugin['_register']).to.be.a.function();
        expect((plugin as any)._register()).to.be.a.string();
        done();
    });

    L.test('Route plugin should register route', (done) => {
       


        server.inject('/ping/wrong', (response: any) => {
            
            expect(JSON.parse(response.payload).message).to.equal('child "format" fails because ["format" must be one of [formated, timestamp]]');
            done();
        });
    });
})