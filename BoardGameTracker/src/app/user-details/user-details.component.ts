import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent  implements OnInit {
  user: any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    //get user details and assign to user variable
  }

}
