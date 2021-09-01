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
  private authenticated: boolean = false;

  constructor(
    private nav: NavService
  ) { }

  ngOnInit(): void {
    Emitters.authObservable.subscribe(
      (auth: boolean) => {
        console.log("authObservable", auth);
        this.authenticated = auth;
      }
    )
  }

  logout(): void {
    this.nav.logout().subscribe(() => {
      this.authenticated = false;
      Emitters.authObservable.next(false);
    });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
