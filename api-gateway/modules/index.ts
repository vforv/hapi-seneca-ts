import { RegisterRoutes } from '../plugins/routes/index';
const Blipp = require('blipp');
const Chairo = require('chairo');
const Swagger = require('hapi-swagger')
const Labbable = require('labbable');

const R = new RegisterRoutes

export const Modlues = [
    {
        register: R.register
    },
    {
        register: Blipp
    }, {
        register: Chairo
    },
    {
        register: require('inert')
    },
    {
        register: require('vision')
    },
    {
        register: Swagger
    }, {
        register: Labbable.plugin
    },
    {
        register: require('good'),
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        log: '*',
                        request: '*',
                        response: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }
]
