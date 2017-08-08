import * as Seneca from 'seneca';

export interface SenecaInstance extends Seneca.Instance {
    act: (pattern: object | string, cb: (err: any, reply: object) => object) => object;
    add: (pattern: object | string, cb: (message: any, next: any) => any) => this;
}