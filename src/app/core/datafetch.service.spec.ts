import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatafetchService } from './datafetch.service';
import { DataObject, AlertObject, AnnouncementObject } from '../shared/interfaces';

describe('DatafetchService', () => {
  let service: DatafetchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatafetchService]
    });
    service = TestBed.inject(DatafetchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Courses as DataObject', () => {
    const mockData: DataObject = {
      total_classes: 4,
      courses: [
        {
          thumbnail: 'url',
          title: 'title',
          subject: 'subject',
          grade: 1,
          grade_change: 0,
          units: 1,
          lessons: 2,
          topics: 3,
          classes: ['class1', 'class2'],
          students: 10,
          start_date: '2022-01-01',
          end_date: '2022-12-31',
          is_favourite: false,
          is_Expired: false,
          is_grade_submission: false,
          is_manage_course: false
        }
      ]
    };
    const mockData2: DataObject = {
      total_classes: 4,
      courses: [
        {
          thumbnail: 'url',
          title: 'title',
          subject: 'subject',
          grade: 1,
          grade_change: 0,
          units: 1,
          lessons: 2,
          topics: 3,
          classes: ['class1', 'class2'],
          students: 10,
          start_date: '2022-01-01',
          end_date: '2022-12-31',
          is_favourite: false,
          is_Expired: false,
          is_grade_submission: false,
          is_manage_course: false
        }
      ]
    };

    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service['url']);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData2);
  });

  it('should return AlertObject', () => {
    const mockAlert: AlertObject = {
      notifications: [
        {
          message: 'message1',
          course: 'course1',
          class: 'class1',
          date: '2022-01-01',
          time: '10:00',
          isSeen: false
        },
        {
          message: 'message2',
          course: 'course2',
          class: 'class2',
          date: '2022-01-02',
          time: '11:00',
          isSeen: true
        }
      ]
    };

    service.getAlerts().subscribe((alert) => {
      expect(alert).toEqual(mockAlert);
    });

    const req = httpMock.expectOne(service['alertUrl']);
    expect(req.request.method).toEqual('GET');
    req.flush(mockAlert);
  });

  it('should return AnnouncementObject', () => {
    const mockAnnouncement: AnnouncementObject = {
      notifications: [ 
        {
        pa: 'pa1',
        message: 'message1',
        course: 'course1',
        attached_files: 0,
        date: '2022-01-01',
        time: '10:00',
        isSeen: false
        }
      ]
    };

    service.getAnnouncements().subscribe((announcement) => {
      expect(announcement).toEqual(mockAnnouncement);
    });

    const req = httpMock.expectOne(service['announcementUrl']);
    expect(req.request.method).toEqual('GET');
    req.flush(mockAnnouncement);
  });

});
