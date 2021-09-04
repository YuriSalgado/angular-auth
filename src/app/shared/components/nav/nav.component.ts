import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../../core/emitters/emitters';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public nav: NavService
  ) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.nav.logout().subscribe(() => {
      this.nav.authenticated = false;
      Emitters.authObservable.next(false);
    });
  }

}
