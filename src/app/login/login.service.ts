import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  login(rawValue: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, rawValue, {withCredentials: true});
  }
}
