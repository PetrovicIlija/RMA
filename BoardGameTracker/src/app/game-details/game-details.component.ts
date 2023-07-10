import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardGameService } from '../board-game.service'; 
import { Game } from '../models/game.model';
import { AuthService } from '../auth.service';
import { GameListService } from '../services/game-list.service';

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
    private gameListService: GameListService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.gameId = params.get('id');
    });
    this.authService.isLoggedIn().then((loggedIn) => {
      this.isLoggedIn = true;
    });
    this.boardGameService.getGameDetails(this.gameId ?? '').subscribe((data) => {
      this.game = data.games[0];
      this.isGameLoaded = true;
    }
    );
}
addToGameList() {
  this.gameListService.addGame(this.authService.getCurrentUserId(), this.gameId ?? '').then(() => {
    console.log('Game added to list');
  });
  }
}
