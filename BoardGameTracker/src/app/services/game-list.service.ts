import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';


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
    return collectionData(gamesRef, {idField : 'id'});
  }
  addGame(userID : string | null, gameID : string) {
    const gamesRef = collection(this.firestore, 'games');
    return addDoc(gamesRef, {userID, gameID});
  }
  getGame(id : string) {
    const gameDocRef = doc(this.firestore, 'games/${id}');
    return docData(gameDocRef, {idField : 'id'});
  }
  deleteGame(id : string) {
    const gameDocRef = doc(this.firestore, 'games/' + id);
    console.log('Deleting game with id: ' + id);
    return deleteDoc(gameDocRef);
  }

}
