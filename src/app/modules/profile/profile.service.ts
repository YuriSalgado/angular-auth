import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  user(): Observable<User> {
    return this.http.get(`${this.API_URL}/user`, {withCredentials: true}) as Observable<User>;
  }
}
