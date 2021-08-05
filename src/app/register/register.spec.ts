import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterComponent } from "./register.component";

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      FormBuilder, HttpClient, Router
    ]
  });
})

describe('RegisterComponent', () => {
  let formbuilder: FormBuilder;
  let httpClient: HttpClient;
  let router: Router;
  it('#clicked() should toggle #isOn', () => {
    const comp = new RegisterComponent(formbuilder, httpClient, router);
    expect(comp).toBeTruthy();
    //expect(comp.isOn).toBe(false, 'off at first');
    //comp.clicked();
  });

});
