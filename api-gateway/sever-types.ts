import * as Hapi from 'hapi';

interface SenecaMethods {
    act: (pattern: object | string, cb: (err: any, reply: object) => object | Hapi.Response) => object;
    add: (pattern: object | string, cb: (message: any, next: any) => object | Hapi.Response) => object;
    use: any;
    client: any;
}

export interface HapiServer extends Hapi.Server {
    info: any;
    seneca: SenecaMethods;
}

export interface HapiRequest extends Hapi.Request {
    seneca: SenecaMethods;
}

export interface IRegister {
    (server: HapiServer, options: any, next: any): void;
    attributes?: any;
}
