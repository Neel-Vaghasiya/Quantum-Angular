import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

import { DatafetchService } from 'src/app/core/datafetch.service';

import { AnnouncementComponent } from './announcement.component';

describe('AnnouncementComponent', () => {
  let component: AnnouncementComponent;
  let fixture: ComponentFixture<AnnouncementComponent>;
  let datafetchServiceSpy: jasmine.SpyObj<DatafetchService>;


  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DatafetchService', ['getAnnouncements']);
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementComponent ],
      imports: [HttpClientTestingModule],
      providers: [{ provide: DatafetchService, useValue: spy }]
    })
    .compileComponents();

    datafetchServiceSpy = TestBed.inject(DatafetchService) as jasmine.SpyObj<DatafetchService>;
    datafetchServiceSpy.getAnnouncements.and.returnValue(of({ notifications: [
      { pa: 'Test PA 1', message: 'Test Message 1', course: '', attached_files: 0, date: '2022-03-09', time: '10:30', isSeen: true },
    { pa: 'Test PA 2', message: 'Test Message 2', course: 'Test Course', attached_files: 2, date: '2022-03-08', time: '14:00', isSeen: false }] }));

  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AnnouncementComponent);
    component = fixture.componentInstance;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set announcement_data property after calling datafetch service', () => {
    const mockData = { "notifications" : [
      {
        "pa": "Wilson Kumar",
        "message": "No classes will be held on 21st Nov",
        "course": "",
        "attached_files": 2,
        "date": "15-Sep-2018",
        "time": "07:21 pm",
        "isSeen": false
      }] };
    datafetchServiceSpy.getAnnouncements.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(datafetchServiceSpy.getAnnouncements).toHaveBeenCalled();
    expect(component.announcement_data).toEqual(mockData.notifications);
  });

  it('should display the announcement number badge when mouse is not entered on announcement element', () => {
    
    component.isEnteredAnc = false;
    fixture.detectChanges();
    const badge = fixture.debugElement.query(By.css('#announcement-number-badge'));
    expect(badge).toBeTruthy();
  });

  it('should hide the announcement number badge when mouse is entered on announcement element', () => {
    
    component.isEnteredAnc = true;
    fixture.detectChanges();
    const badge = fixture.debugElement.query(By.css('#announcement-number-badge'));
    expect(badge).toBeFalsy();
  });

  it('should add announcement-seen class when announcement is seen', () => {

    fixture.detectChanges();
    component.announcement_data = [
      {
        "pa": "Wilson Kumar",
        "message": "No classes will be held on 21st Nov",
        "course": "",
        "attached_files": 2,
        "date": "15-Sep-2018",
        "time": "07:21 pm",
        "isSeen": true
      }];

    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.announcement-list li');
    expect(element.classList.contains('announcement-seen')).toBeTrue();
  });

  it('should not contain announcement-seen class when isSeen is false', () => {
    fixture.detectChanges();
    component.announcement_data = [
      {
        "pa": "Wilson Kumar",
        "message": "No classes will be held on 21st Nov",
        "course": "",
        "attached_files": 2,
        "date": "15-Sep-2018",
        "time": "07:21 pm",
        "isSeen": false
      }];

    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.announcement-list li');
    expect(element.classList.contains('announcement-seen')).toBeFalsy();
  });

  it('should apply announcement-div-hover class to announcement-div when isEnteredAnc is true', () => {
    component.isEnteredAnc = true;
    fixture.detectChanges();

    const announcementDiv = fixture.debugElement.nativeElement.querySelector('#announcement-div-hover');
    expect(announcementDiv).toBeTruthy();
  });

  it('should loop through all announcements and display their details', () => {
    fixture.detectChanges();
    const announcements = fixture.nativeElement.querySelectorAll('.announcement-list li');
    expect(announcements.length).toEqual(component.announcement_data.length);

    announcements.forEach((announcementElem: any, index: number) => {
      const announcement = component.announcement_data[index];
      expect(announcementElem.querySelector('.from span').textContent.trim()).toEqual(announcement.pa);
      expect(announcementElem.querySelector('.line2 div').textContent.trim()).toEqual(announcement.message);
      if (announcement.course !== '') {
        expect(announcementElem.querySelector('.line3').textContent.trim()).toEqual(`Course: ${announcement.course}`);
      }
      if (announcement.attached_files > 0) {
        expect(announcementElem.querySelector('.attach span').textContent.trim()).toEqual(`${announcement.attached_files} files are attached`);
      }
      expect(announcementElem.querySelector('.announce-date').textContent.trim()).toEqual(`${announcement.date} at ${announcement.time}`);
    });
  });

  it('should set brightness filter to 0 and invert to 1 on hover of announcement icon', () => {
    const icon = fixture.nativeElement.querySelector('#announcement-icon-to-white');
    component.isEnteredAnc = true;
    fixture.detectChanges();
    expect(icon.style.filter).toEqual('brightness(0) invert(1)');
  });
    
  it('should set brightness filter to none on mouse leave of announcement icon', () => {
    const icon = fixture.nativeElement.querySelector('#announcement-icon-to-white');
    component.isEnteredAnc = false;

    fixture.detectChanges();
    expect(icon.style.filter).toEqual('none');
  });

});
