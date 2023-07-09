import { Component, OnInit } from '@angular/core';
import { GameListService } from '../services/game-list.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent  implements OnInit {
  games : any;
  constructor(
    private gameListService : GameListService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.gameListService.getGames().subscribe(games => {
      this.games = games;
      console.log(this.games[0].userID);
      this.games = this.games.filter((game: any) => {
        return game.userID == this.authService.getCurrentUserId
      });
    }
    );
  }

}
