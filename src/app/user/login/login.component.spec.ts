import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('should toggle the preview value on click', () => {
    expect(component.preview).toBe(false);
    const previewElement = fixture.nativeElement.querySelector('#preview');
    previewElement.click();
    fixture.detectChanges();
    expect(component.preview).toBe(true);
    previewElement.click();
    fixture.detectChanges();
    expect(component.preview).toBe(false);
  });

  it('should toggle show password when toggle button is clicked', () => {
    const previewIcon = fixture.nativeElement.querySelector('#preview');
    const passwordInput = fixture.nativeElement.querySelector('#password');
    expect(passwordInput.type).toBe('password');
    previewIcon.click();
    fixture.detectChanges();
    expect(passwordInput.type).toBe('text');
    previewIcon.click();
    fixture.detectChanges();
    expect(passwordInput.type).toBe('password');
  });

  it('should have check box checked by default and should change vlaue on click', () => {
    const checkbox_input = fixture.nativeElement.querySelector('#checkbox-input');
    expect(checkbox_input.checked).toBeTruthy();
    checkbox_input.click();
    fixture.detectChanges();
    expect(checkbox_input.checked).toBeFalsy();
    checkbox_input.click();
    fixture.detectChanges();
    expect(checkbox_input.checked).toBeTruthy();
  });

  it('should have district radio button to be checked by default', () => {
    const district = fixture.nativeElement.querySelector('#district');
    const independent = fixture.nativeElement.querySelector('#independent');
    expect(district.checked).toBeTruthy();
    expect(independent.checked).toBeFalsy();
  });

  it('should set radio button value on click', () => {
    const district = fixture.nativeElement.querySelector('#district');
    const independent = fixture.nativeElement.querySelector('#independent');
    independent.click();
    fixture.detectChanges();
    expect(district.checked).toBeFalsy();
    expect(independent.checked).toBeTruthy();
    district.click();
    fixture.detectChanges();
    expect(district.checked).toBeTruthy();
    expect(independent.checked).toBeFalsy();

  });
});
