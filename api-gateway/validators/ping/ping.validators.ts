import * as Joi from 'joi';

export const pingValidator: Joi.ObjectSchema = Joi.object().keys({
    format: Joi
            .string()
            .valid('formated', 'timestamp')
            // .options({language: {any: {allowOnly: 'must be'}}})
            .required()
            .description('Ping date')
            .example('formated')
});
