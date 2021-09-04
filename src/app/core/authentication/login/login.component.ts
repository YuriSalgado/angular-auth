import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../../emitters/emitters';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private login: LoginService
  ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void {
    let rawValue = this.form.getRawValue();

    this.login.login(rawValue).subscribe(
      res => {
        Emitters.authObservable.next(true);
        this.router.navigate(['/']);
      },
      error => {
        Emitters.authObservable.next(false);
        this.router.navigate(['/login']);
      });
  }

}
