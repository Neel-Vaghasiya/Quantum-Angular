import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientTestingModule, SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isAuthenticated to true on init', () => {
    fixture.detectChanges();

    expect(component.isAuthenticated).toBeTrue();
  });

  it('should set the total_classes property correctly', () => {
    const totalClasses = 20;
    component.total_classes = totalClasses;
    expect(component.total_classes).toEqual(totalClasses);
  });
});
