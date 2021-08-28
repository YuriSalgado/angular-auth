import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../core/emitters/emitters';
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
      (res: any) => {
        this.message = `Hi ${res.first_name}`;
        Emitters.authEmitter.emit(true);
      },
      error => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    )
  }

}