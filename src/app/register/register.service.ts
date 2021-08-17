import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URL = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) {

  }

  register(formBuilder: FormGroup): Observable<any> {
    return this.http.post(this.API_URL + '/register', formBuilder.getRawValue());
  }
}