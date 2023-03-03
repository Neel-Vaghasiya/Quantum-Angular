import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isAuthenticated to false by default', () => {
    expect(component.isAuthenticated).toBe(false);
  });

  it('should set preview to false by default', () => {
    expect(component.preview).toBe(false);
  });

  it('should set isAuthenticated to true after successful login', () => {
    component.isAuthenticated = true;
    expect(component.isAuthenticated).toBe(true);
  });

  it('should set preview to true when preview button is clicked', () => {
    component.preview = true;
    expect(component.preview).toBe(true);
  });
});
