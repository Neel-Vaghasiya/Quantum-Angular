import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
      "grade": 8,
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

  it('should display the "EXPIRED" badge when the course is expired', () => {
    component.course = {
      ...component.course,
      is_Expired: true
    };
    fixture.detectChanges();
    let badge = fixture.debugElement.query(By.css('.expired-badge'));
    expect(badge).toBeTruthy();
    expect(badge.nativeElement.textContent).toContain('EXPIRED');
    component.course = {
      ...component.course,
      is_Expired: false
    };
    fixture.detectChanges();
    badge = fixture.debugElement.query(By.css('.expired-badge'));
    expect(badge).toBeFalsy();
  });

  it('should display the course thumbnail', () => {
    fixture.detectChanges();
    const thumbnail = fixture.debugElement.query(By.css('.course-image img'));
    expect(thumbnail).toBeTruthy();
    expect(thumbnail.nativeElement.src).toContain(component.course.thumbnail.substring(5));
  });

  it('should display the course title', () => {
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toContain(component.course.title);
  });

  it('should display the course subject and grade', () => {
    fixture.detectChanges();
    const subject = fixture.debugElement.query(By.css('.sub-grade .subject'));
    const grade = fixture.debugElement.query(By.css('.sub-grade .grade'));
    expect(subject).toBeTruthy();
    expect(subject.nativeElement.textContent).toContain(component.course.subject);
    expect(grade).toBeTruthy();
    expect(grade.nativeElement.textContent).toContain(`Grade ${component.course.grade}`);
  });

  it('should display the course unit, lesson, and topic numbers', () => {
    fixture.detectChanges();
    const units = fixture.debugElement.query(By.css('.size .size-num:nth-of-type(1)'));
    const lessons = fixture.debugElement.query(By.css('.size .size-num:nth-of-type(2)'));
    const topics = fixture.debugElement.query(By.css('.size .size-num:nth-of-type(3)'));
    expect(units).toBeTruthy();
    expect(units.nativeElement.textContent).toContain(component.course.units);
    expect(lessons).toBeTruthy();
    expect(lessons.nativeElement.textContent).toContain(component.course.lessons);
    expect(topics).toBeTruthy();
    expect(topics.nativeElement.textContent).toContain(component.course.topics);
  });

  it('should display the correct options in the course division select', () => {
    component.course = {
      ...component.course,
      classes: ['Class A', 'Class B', 'Class C', 'Class D']
    };
    component.total_classes = 4;
    fixture.detectChanges();
    let options = fixture.debugElement.queryAll(By.css('.division select option'));
    expect(options.length).toBe(5);
    expect(options[0].nativeElement.textContent).toContain('All Classes');

    component.course = {
      ...component.course,
      classes: ['Class A', 'Class B', 'Class C']
    };

    fixture.detectChanges();
    options = fixture.debugElement.queryAll(By.css('.division select option'));
    
    expect(options.length).toBe(3);
    expect(options[0].nativeElement.textContent).toContain('Class A');

    component.course = {
      ...component.course,
      classes: []
    };

    fixture.detectChanges();
    options = fixture.debugElement.queryAll(By.css('.division select option'));
    const select = fixture.debugElement.queryAll(By.css('.division select'))
    expect(options.length).toBe(1);
    expect(options[0].nativeElement.textContent).toContain('No Classes');
    expect(select[0].attributes['disabled']).toBe('');
  });
  
  it('should display the course student count', () => {
    fixture.detectChanges();
    
    const courseStudentCount = fixture.debugElement.query(By.css('.cap-dur .subject'));
    expect(courseStudentCount.nativeElement.textContent.trim()).toBe(`${component.course.students} Students`);
    });
    
  it('should display the course duration', () => {
    fixture.detectChanges();
    
    const courseDuration = fixture.debugElement.query(By.css('.cap-dur .duration'));
    expect(courseDuration.nativeElement.textContent.trim()).toBe(`${component.course.start_date} - ${component.course.end_date}`);
  });

  it('should have unfavourite class when course.is_favourite is false', () => {
    component.course = {
      ...component.course,
      is_favourite: false
    };
    fixture.detectChanges();
    const star = fixture.nativeElement.querySelector('.star');
    
    expect(star.classList.contains('unfavourite')).toBeTruthy();

  })
  

});
