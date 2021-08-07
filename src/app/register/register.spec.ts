import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { RegisterComponent } from "./register.component";

describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;
  let registerFixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [],
      declarations: [RegisterComponent]
    }).compileComponents();

    registerFixture = TestBed.createComponent(RegisterComponent);
    registerComponent = registerFixture.componentInstance;
  });

  it('Component instantiated successfully', () => {
    expect(registerComponent).toBeTruthy();
  });

  it('Should in ngOnInit set form successfully', () => {
  });

  it('Should in submit request response successfully', () => {
  });

});
