import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  logout(): Observable<any> {
    return this.http.post(`${this.API_URL}/logout`, {withCredentials: true});
  }
}
