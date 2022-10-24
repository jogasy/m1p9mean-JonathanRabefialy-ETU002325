import { AuthState } from 'src/store/auth/auth.state';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, takeUntil, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  @Select(AuthState.auth) type$?: Observable<number>;
  private unsuscribe$ : Subject<void> = new Subject();

  canActivate(): Observable<boolean> | boolean {
    let val!: number;
    this.type$?.pipe(
      takeUntil(this.unsuscribe$)
    ).subscribe(x => val = x);
    return val === 0 ? true : false;
  }

}
