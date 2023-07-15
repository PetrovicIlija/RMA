import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardGameService } from '../board-game.service'; 
import { Game } from '../models/game.model';
import { AuthService } from '../auth.service';
import { GameListService } from '../services/game-list.service';
import { onAuthStateChanged } from 'firebase/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent  implements OnInit {
  gameId: string | null = null;
  game : any = {};
  isLoggedIn: boolean = false;
  isGameLoaded: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private boardGameService: BoardGameService,
    private authService: AuthService,
    private gameListService: GameListService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.gameId = params.get('id');
    });
    const auth = this.authService.getAuth();
    onAuthStateChanged(auth, async (user)=>{
      if(user){
          this.isLoggedIn = true;
      }else{
          this.isLoggedIn = false;
      }
  })
    this.boardGameService.getGameDetails(this.gameId ?? '').subscribe((data) => {
      this.game = data.games[0];
      this.isGameLoaded = true;
    }
    );
}
addToGameList() {
  this.gameListService.addGame(this.authService.getCurrentUserId(), this.gameId ?? '').then(() => {
    this.presentToast();
  });
  }
  presentToast() {
    this.toastController.create({
      message: 'Game added to your list',
      duration: 2000
    }).then((toast) => {
      toast.present();
    });
  }
}
