
import * as Seneca from 'seneca';
import { PingActions } from '../actions/ping.actions';

const ping = new PingActions;

export class PingLogic {

  public getPing(this: Seneca.Instance, options: any): string {
    
    this.add('role:ping,cmd:date', ping.cb);

    return "getPing"
  }

}
