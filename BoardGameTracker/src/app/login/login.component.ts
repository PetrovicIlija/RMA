import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  loginData = { email:'', password:'' };
  isLoggedIn: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const auth = this.authService.getAuth();
    onAuthStateChanged(auth, async (user)=>{
      if(user){
          this.isLoggedIn = true;
      }else{
          this.isLoggedIn = false;
      }
  })
  }
  login() {
    this.authService.login(this.loginData.email, this.loginData.password);
    this.router.navigate(['/home']);
  }
}
