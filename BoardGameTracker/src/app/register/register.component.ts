import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  isLoggedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.createRegisterForm();
    const auth = this.authService.getAuth();
    onAuthStateChanged(auth, async (user)=>{
      if(user){
          this.isLoggedIn = true;
      }else{
          this.isLoggedIn = false;
      }
  })
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      try {
        this.authService.register(email, password);
      }
      catch (error) {
        console.log(error);
        this.presentToast();
      }
    }
  }
  presentToast() {
    const toast = this.toastController.create({
      message: 'Error: User already exists',
      duration: 2000
    });
    toast.then(toast => toast.present());
  }
}