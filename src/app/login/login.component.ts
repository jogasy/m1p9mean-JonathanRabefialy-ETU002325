import { Subject, takeUntil } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string = '';
  password: string = '';
  error: boolean = false;

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }

  onConnect() {
    if(this.name === "admin" && this.password === "admin"){
      this.service
                .setAuth({type: 0, isConnected: true})
                .pipe(
                  takeUntil(this.unsuscribe$)
                ).subscribe();
      this.router.navigate(['/dashboard']);
    }else if(this.name === "delivery" && this.password === "delivery") {
      this.service
                .setAuth({type: 1, isConnected: true})
                .pipe(
                  takeUntil(this.unsuscribe$)
                ).subscribe();
      this.router.navigate(['/dashboard/delivery']);
    }else {
      this.error = true;
    }
  }

}
