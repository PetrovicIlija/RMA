import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class GameListService {
  constructor(
    private firestore : Firestore,
  ) { 
    
  }
  getGames() {
    const gamesRef = collection(this.firestore, 'games');
    return collectionData(gamesRef);
  }
  addGame(userID : string, gameID : string, gameTitle : string) {
    const gamesRef = collection(this.firestore, 'games');
    return collectionData(gamesRef);
  }

}
