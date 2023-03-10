import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { DatafetchService } from 'src/app/core/datafetch.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from '../courses/courses.component';
import { DashboardModule } from '../dashboard.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let datafetchServiceSpy: jasmine.SpyObj<DatafetchService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DatafetchService', ['getData', 'getAlerts', 'getAnnouncements']);
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientTestingModule, SharedModule, DashboardModule],
      providers: [{ provide: DatafetchService, useValue: spy }]
    })
    .compileComponents();

    datafetchServiceSpy = TestBed.inject(DatafetchService) as jasmine.SpyObj<DatafetchService>;
    datafetchServiceSpy.getData.and.returnValue(of({
      "total_classes" : 4,
      "courses" : [
        {
            "thumbnail": "../../assets/image/courseimage/imageMask-1.svg",
            "title": "Acceleration",
            "subject": "Physics",
            "grade": 7,
            "grade_change": 2,
            "units": 4,
            "lessons": 18,
            "topics": 24,
            "classes": ["Mr. Frank's Class B", "Mr. John's Class B", "Ms. Cassy's Class C"],
            "students": 50,
            "start_date": "21-Jan-2020",
            "end_date": "21-Aug-2020",
            "is_favourite": true,
            "is_Expired": false,
            "is_grade_submission": true,
            "is_manage_course": true
        }
      ]
    }));
    datafetchServiceSpy.getAlerts.and.returnValue(of({ notifications: [] }));
    datafetchServiceSpy.getAnnouncements.and.returnValue(of({ notifications: [] }));
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have the correct initial values', () => {
    expect(component.isAuthenticated).toBe(true);
    expect(component.courses.length).toBe(0);
    expect(component.courses).toEqual([]);
    expect(component.res).toBeUndefined();
    expect(component.total_classes).toBe(0);
  });

  it('should set the total_classes property correctly', () => {
    const totalClasses = 20;
    component.total_classes = totalClasses;
    expect(component.total_classes).toEqual(totalClasses);
  });

  it('should set courses and total_classes properties after calling datafetch service', () => {
    const mockData = {
      "total_classes" : 4,
      "courses" : [
          {
              "thumbnail": "../../assets/image/courseimage/imageMask-1.svg",
              "title": "Acceleration",
              "subject": "Physics",
              "grade": 7,
              "grade_change": 2,
              "units": 4,
              "lessons": 18,
              "topics": 24,
              "classes": ["Mr. Frank's Class B", "Mr. John's Class B", "Ms. Cassy's Class C"],
              "students": 50,
              "start_date": "21-Jan-2020",
              "end_date": "21-Aug-2020",
              "is_favourite": true,
              "is_Expired": false,
              "is_grade_submission": true,
              "is_manage_course": true
          }
        ]
    };
    datafetchServiceSpy.getData.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(datafetchServiceSpy.getData).toHaveBeenCalled();
    expect(component.courses).toEqual(mockData.courses);
    expect(component.total_classes).toEqual(mockData.total_classes);
  });

  it('should render the courses and classes overview', () => {

  fixture.detectChanges()
    const coursesSpan = fixture.debugElement.query(By.css('#courses-span'));
    expect(coursesSpan.nativeElement.textContent.trim()).toBe(`${component.courses.length}`);

    const classesSpan = fixture.debugElement.query(By.css('#classes-span'));
    expect(classesSpan.nativeElement.textContent.trim()).toBe(`${component.total_classes}`);
  });

  it('should render the course cards for each course in courses array', () => {
    fixture.detectChanges();

    const courseComponents = fixture.debugElement.queryAll(By.directive(CoursesComponent));
    expect(courseComponents.length).toBe(component.courses.length);

    courseComponents.forEach((courseComponent, i) => {
      expect(courseComponent.componentInstance.course).toBe(component.courses[i]);
      expect(courseComponent.componentInstance.total_classes).toBe(component.total_classes);
      expect(courseComponent.nativeElement.classList.contains('expired-content')).toBe(component.courses[i].is_Expired);
    });
  });

  

  
});
