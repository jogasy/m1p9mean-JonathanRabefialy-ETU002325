import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './types/user';

@Injectable()
export class UsersService {
  readonly api = environment.api;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.api + '/user')
        .pipe(
          map(x => x.ListUsers)
        );
  }

  addUser(user: User): Observable<any> {
    return this.http.post(this.api + '/user', {name: user.name , password: user.password, role: user.role});
  }

  deleteUser(id: string) : Observable<any> {
    return this.http.delete(this.api + '/user/'+ id );
  }
}
