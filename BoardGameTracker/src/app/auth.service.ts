import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import { UserCredential } from '@firebase/auth-types';
import { User } from './models/user.model';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserLocalPersistence, Auth, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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


  constructor() {
    initializeApp(environment.firebase);
    this.auth = getAuth();
    this.auth.setPersistence(browserLocalPersistence);
   }
}
