import { Profile } from './types/profile';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/store/auth/auth.action';

@Injectable()
export class LoginService {
  constructor(private store: Store) {}

  @Select() isConnected$! : Observable<boolean>;

  setAuth(auth: Profile) {
    return this.store.dispatch(new Auth.SetAuth(auth));
  }
}
