import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import { UserCredential } from '@firebase/auth-types';
import { User } from './models/user.model';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserLocalPersistence, Auth, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuth() {
    return this.auth;
  }
  auth: Auth;
  isLoggedIn() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (!user) {
          reject(false);
        }
        resolve(true);
      });
    });
  }
  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.navCtrl.navigateForward('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.showToast();
      });
  }
  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'Invalid email or password',
      duration: 3000, 
      position: 'bottom' 
    });
    toast.present();
  }
  register(email : string, password : string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      }
      );
  }  

  getCurrentUser() {
    const user = this.auth.currentUser;
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  //get current user's uid
  getCurrentUserId() {
    const user = this.auth.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
  }
  logout() {
    this.auth.signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
    });
  }


  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    initializeApp(environment.firebase);
    this.auth = getAuth();
    this.auth.setPersistence(browserLocalPersistence);
   }
}
