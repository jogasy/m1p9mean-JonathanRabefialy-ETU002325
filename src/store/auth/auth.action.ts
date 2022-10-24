import { Profile } from './../../app/login/types/profile';

export namespace Auth {
  export class SetAuth {
    static readonly type = '[Auth] set auth';
    constructor(public auth: Profile){}
  }

  export class UpdateAuth {
    static readonly type = '[Auth] Update auth';
    constructor(public isConnected: boolean) { }
  }

}
