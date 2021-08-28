import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { RegisterComponent } from "./register.component";
import { RegisterService } from "./register.service";

describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;
  let registerFixture: ComponentFixture<RegisterComponent>;
  let httpMock: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [RegisterService],
      declarations: [RegisterComponent]
    }).compileComponents();

    registerFixture = TestBed.createComponent(RegisterComponent);
    registerComponent = registerFixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    router = TestBed.inject(Router);
  });

  it('Component instantiated successfully', () => {
    expect(registerComponent).toBeTruthy();
  });

  it('Should in ngOnInit set form successfully normal fields', () => {
    registerComponent.ngOnInit();
    expect(registerComponent.form.value).toEqual({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: ''
    });
  });

  it('Should in ngOnInit set form successfully full fields', () => {
    registerComponent.ngOnInit();
    expect(registerComponent.form.getRawValue()).toEqual({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirm: ''
    });
  });

  it('Should in submit request response successfully', () => {
    const routerSpy = spyOn(router, 'navigate');

    registerComponent.ngOnInit();
    registerComponent.submit();

    const request = httpMock.expectOne('http://localhost:8000/api/register');
    request.flush([]);

    expect(request.request.method).toBe('POST');
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });

});
