import { Component, OnInit } from '@angular/core';
import { BoardGameService } from '../board-game.service';
import { AuthService } from '../auth.service';
import { onAuthStateChanged } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


featuredGames: any;
isLoggedIn: boolean = false;

  constructor(
    private boardGameService: BoardGameService,
    private authService: AuthService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.authService.isLoggedIn().then((loggedIn) => {
      this.isLoggedIn = true;
    });
    //get featured games, service returns 3 games
    this.boardGameService.getHighestRankedGames().subscribe(
      (data) => {
        this.featuredGames = data.games;
  }
    );
  }
  //search games and console log the results
  onSearch(event: any) {
    const query = event.target.value;
    this.boardGameService.searchGames(query).subscribe(
      (data) => {
        // Handle the API response and update the UI accordingly
        this.featuredGames = data.games.slice(0, 3);
      },
      (error) => {
        // Handle any errors that occur during the API request
        console.error(error);
      }
    );
  }

  toggleDescription(game: any) {
    game.collapsed = !game.collapsed;
  }

  openGames() {
    this.router.navigate(['/games-list']);
    }
    logout() {
    throw new Error('Method not implemented.');
    }
  
}
