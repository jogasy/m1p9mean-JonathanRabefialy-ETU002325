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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onConnect() {
    if(this.name === "admin" && this.password === "admin"){
      this.router.navigate(['/dashboard']);
    }else if(this.name === "delivery" && this.password === "delivery") {
      this.router.navigate(['/dashboard']);
    }else {
      this.error = true;
    }
  }

}
