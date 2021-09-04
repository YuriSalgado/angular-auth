import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  message = 'You are not logged in';

  constructor(
    private profile: ProfileService
  ) {

  }

  ngOnInit(): void {
    this.profile.user().subscribe(
      (res: User) => {
        this.message = `Hi ${res.first_name} greetings to family ${res.last_name} we send a mail to ${res.email}`;
      },
      error => {
        this.message = 'Oh, we have a problemn to get your profile.';
      }
    )
  }

}
