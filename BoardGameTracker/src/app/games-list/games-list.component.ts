import { Component, OnInit } from '@angular/core';
import { GameListService } from '../services/game-list.service';
import { AuthService } from '../auth.service';
import { BoardGameService } from '../board-game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent  implements OnInit {
  games : any;
  constructor(
    private gameListService : GameListService,
    private authService : AuthService,
    private boardGameService: BoardGameService,
  ) { }

  ngOnInit() {
    this.gameListService.getGames().subscribe(games => {
      this.games = games;
      this.games = this.games.filter((game: any) => {
        return game.userID == this.authService.getCurrentUserId()
      });
      for (let game of this.games) {
        this.boardGameService.getGameDetails(game.gameID).subscribe((data) => {
          game.game = data.games[0];
          console.log(game.game);
        });
      }
    });
  }

}
