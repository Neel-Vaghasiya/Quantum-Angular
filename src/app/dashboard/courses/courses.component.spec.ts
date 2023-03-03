import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the @Input course property correctly', () => {
    const course = {
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
    };
    component.course = course;
    expect(component.course).toEqual(course);
  });

  it('should set the @Input total_classes property correctly', () => {
    const totalClasses = 20;
    component.total_classes = totalClasses;
    expect(component.total_classes).toEqual(totalClasses);
  });

});
