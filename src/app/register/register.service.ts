import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  register(rawValue: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, rawValue);
  }
}
