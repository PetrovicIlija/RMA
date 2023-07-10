import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  loginData = { email:'', password:'' };
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.loginData.email, this.loginData.password);
    this.router.navigate(['/home']);
  }
}
