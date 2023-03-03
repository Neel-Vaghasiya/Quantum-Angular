import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DatafetchService } from 'src/app/core/datafetch.service';

import { AnnouncementComponent } from './announcement.component';

describe('AnnouncementComponent', () => {
  let component: AnnouncementComponent;
  let fixture: ComponentFixture<AnnouncementComponent>;
  let datafetchSpy: jasmine.SpyObj<DatafetchService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
