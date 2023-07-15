import { Component, OnInit } from '@angular/core';
import { GameListService } from '../services/game-list.service';
import { AuthService } from '../auth.service';
import { BoardGameService } from '../board-game.service';
import { onAuthStateChanged } from 'firebase/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent  implements OnInit {
  games : any;
  isLoggedIn: boolean = false;
  isGameLoaded: boolean = false;
  constructor(
    private gameListService : GameListService,
    private authService : AuthService,
    private boardGameService: BoardGameService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadGames();
    const auth = this.authService.getAuth();
    onAuthStateChanged(auth, async (user)=>{
      if(user){
          this.isLoggedIn = true;
      }else{
          this.isLoggedIn = false;
      }
  })
  }
  deleteGame(gameIDToDelete: string) {
    console.log(gameIDToDelete);
    this.gameListService.deleteGame(gameIDToDelete).then(() => {
      this.presentToast();
      this.loadGames();
    });
    }

    loadGames() {
      this.gameListService.getGames().subscribe(games => {
        this.games = games;
        this.games = this.games.filter((game: any) => {
          return game.userID == this.authService.getCurrentUserId();
        });
        const gameDetailPromises = this.games.map((game: any) => {
          return this.boardGameService.getGameDetails(game.gameID).toPromise();
        });
        Promise.all(gameDetailPromises).then((gameDetails: any[]) => {
          for (let i = 0; i < gameDetails.length; i++) {
            this.games[i].game = gameDetails[i].games[0];
            console.log(this.games[i].game);
          }
          this.isGameLoaded = true;
        });
      });
    }
    presentToast() {
      this.toastController.create({
        message: 'Game removed from your list',
        duration: 2000
      }).then((toast) => {
        toast.present();
      });
    }
}
