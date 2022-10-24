import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthState } from './../../../store/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  @Select() isConnected$! : Observable<boolean>;
  private unsuscribe$: Subject<void> = new Subject();

  constructor(private store : Store, private router: Router) {}

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  canActivate(): Observable<boolean> | boolean {
    let val: boolean = false;
    this.store.select(AuthState.isConnected)
      .pipe(
        takeUntil(this.unsuscribe$)
      ).subscribe(x => {
        if(x) val = x;
      });
    if(val){
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
