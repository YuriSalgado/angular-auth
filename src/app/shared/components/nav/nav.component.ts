import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../../core/emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Emitters.authObservable.subscribe(
      (auth: boolean) => {
        console.log("authObservable", auth);
        this.authenticated = auth;
      }
    )
  }

  logout(): void {
    this.http.get('http://localhost:8000/api/logout', {withCredentials: true})
    .subscribe(() => this.authenticated = false);
  }

}
