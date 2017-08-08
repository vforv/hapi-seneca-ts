
import * as Seneca from 'seneca';
import { SenecaInstance } from '../service-types';
import { PingActions } from '../actions/ping.actions';

const ping = new PingActions;

export class PingLogic {

  public getPing(this: SenecaInstance, options: any) {

    this.add('role:ping,cmd:date', ping.cb)

    return "getPing"
  }

}
