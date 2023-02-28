import { Component, Input, OnInit } from '@angular/core';
import { DatafetchService } from 'src/app/core/datafetch.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit{
  @Input() isEnteredAnc: boolean | undefined;

  responce: any;
  announcement_data: any = [];

  constructor(private datafetch: DatafetchService) {}

  ngOnInit(): void {
    this.datafetch.getAnnouncements().subscribe( res => {
      this.responce = res;
      this.announcement_data = this.responce.notifications;
    })
  }
}
