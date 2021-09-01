import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = 'You are not logged in';

  constructor(
    private home: HomeService
  ) {

  }

  ngOnInit(): void {
    this.home.user().subscribe(
      (res: User) => {
        this.message = `Hi ${res.first_name}`;
      },
      error => {
        this.message = 'You are not logged in';
      }
    )
  }

}
