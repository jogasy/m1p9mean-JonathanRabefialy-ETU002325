import { AuthState } from 'src/store/auth/auth.state';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';

@Injectable()
export class DashboardService {
  @Select(AuthState.auth) type$? : Observable<number>;
  constructor() { }
}
