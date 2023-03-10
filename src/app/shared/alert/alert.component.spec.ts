import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DatafetchService } from 'src/app/core/datafetch.service';
import { AlertObject } from '../interfaces';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let datafetchServiceSpy: jasmine.SpyObj<DatafetchService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DatafetchService', ['getAlerts']);
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers: [{ provide: DatafetchService, useValue: spy }]
    }).compileComponents();

    datafetchServiceSpy = TestBed.inject(DatafetchService) as jasmine.SpyObj<DatafetchService>;
    datafetchServiceSpy.getAlerts.and.returnValue(of({
      notifications: [{
        message: "No classes will be held on 21st Nov",
        course: "",
        class: "",
        date: "15-Sep-2018",
        time: "07:21 pm",
        isSeen: false
      },
      {
        message: "No classes will be held on 21st Nov",
        course: "Mathematics 101",
        class: "",
        date: "15-Sep-2018",
        time: "07:21 pm",
        isSeen: false
      }]
    }));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct initial values', () => {
    expect(component.alert_data.length).toBe(0);
  });

  it('should set alert_data property after calling datafetch service', () => {
    const mockData = {
      "notifications": [
        {
          "message": "No classes will be held on 21st Nov",
          "course": "",
          "class": "",
          "date": "15-Sep-2018",
          "time": "07:21 pm",
          "isSeen": false
        }]
    };
    datafetchServiceSpy.getAlerts.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(datafetchServiceSpy.getAlerts).toHaveBeenCalled();
    expect(component.alert_data).toEqual(mockData.notifications);
  });

  it('should display the correct message for each notification', () => {
    fixture.detectChanges();
    const notificationList = fixture.debugElement.queryAll(By.css('.alert-list li'));
    component.alert_data.forEach((alert: any, index: number) => {
      const message = notificationList[index].query(By.css('.line1')).nativeElement.textContent.trim();
      expect(message).toBe(alert.message);
    });
  });

  it('should display the correct course and class for each notification', () => {
    fixture.detectChanges();
    const notificationList = fixture.debugElement.queryAll(By.css('.alert-list li'));
    component.alert_data.forEach((alert: any, index: number) => {
      if (alert.course != '') {
        const course = notificationList[index].query(By.css('.course-class')).nativeElement.textContent.trim();
        expect(course).toContain(alert.course ? alert.course : '');
      }
      if (alert.class != '') {
        const classValue = notificationList[index].query(By.css('class-class')).nativeElement.textContent.trim();
        expect(classValue).toContain(alert.class ? alert.class : '');
      }
    });
  });

  it('should display the correct date and time for each notification', () => {
    fixture.detectChanges();
    const notificationList = fixture.debugElement.queryAll(By.css('.alert-list li'));
    component.alert_data.forEach((alert: any, index: number) => {
      const dateAndTime = notificationList[index].query(By.css('.line3')).nativeElement.textContent.trim();
      expect(dateAndTime).toBe(`${alert.date} at ${alert.time}`);
    });
  });

  it('should display the badge number if isEntered is true', () => {
    component.isEntered = false;
    fixture.detectChanges();
    const badgeNumber = fixture.debugElement.query(By.css('.badge-number')).nativeElement.textContent.trim();
    expect(badgeNumber).toBeTruthy();
  });

  it('should not display the badge number if isEntered is false', () => {
    component.isEntered = true;
    fixture.detectChanges();
    const badgeNumber = fixture.debugElement.query(By.css('.badge-number'));
    expect(badgeNumber).toBeFalsy();
  });

  it('should apply the invert filter to the icon when the component is hovered over', () => {
    const icon = fixture.debugElement.query(By.css('.alert-icon'));
    component.isEntered = true;
    fixture.detectChanges();
    expect(icon.styles['filter']).toBe('brightness(0) invert(1)');
    component.isEntered = false;
    fixture.detectChanges();
    expect(icon.styles['filter']).toBe('none');
  });

});
