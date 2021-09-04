import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emitters } from 'src/app/core/emitters/emitters';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  API_URL = environment.apiUrl;
  authenticated: boolean = false;

  constructor(
    private http: HttpClient
  ) {
    Emitters.authObservable.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    )
  }


  logout(): Observable<any> {
    return this.http.get(`${this.API_URL}/logout`, {withCredentials: true});
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

}
