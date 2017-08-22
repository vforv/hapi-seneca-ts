import * as lab from 'lab';
import * as code from 'code';
import * as sinon from 'sinon';
import * as Seneca from 'seneca';
import { PingLogic } from '../logic/ping.logic';
import * as Moment from 'moment';


const ping = new PingLogic

const L = exports.lab = lab.script();
const expect = code.expect;


L.before((done) => {
    done();
});


L.experiment('Ping action', () => {

    L.test('Ping acction test timestamp', (done) => {
        const seneca = test_seneca();

        seneca.act(
            {
                role: 'ping',
                cmd: 'date',
                format: 'timestamp'
            },
            (err: any, out: any): any => {
                let d = Date.now();

                expect(d).to.equal(out.date)
                
                done();
            });
    });

    L.test('Ping acction test moment formated time', (done) => {
        const seneca = test_seneca();

        seneca.act(
            {
                role: 'ping',
                cmd: 'date',
                format: 'formated'
            },
            (err: any, out: any): any => {
                let d = Moment().format('MMMM Do YYYY, h:mm:ss a');

                expect(d).to.equal(out.date)
                
                done();
            });
    });
});


// Construct a Seneca instance suitable for unit testing
function test_seneca() {
    return Seneca({ log: 'test' })

        // activate unit test mode. Errors provide additional stack tracing context.
        // The fin callback is called when an error occurs anywhere.
        // .test(fin)


        // Load the microservice business logic
        .use(ping.getPing)
}
