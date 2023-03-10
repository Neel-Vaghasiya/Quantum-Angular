import { Component, Input, OnInit } from '@angular/core';
import { DatafetchService } from 'src/app/core/datafetch.service';
import { AlertObject } from '../interfaces';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  @Input() isEntered: boolean | undefined;
  alert_data: any = [];

  constructor(private datafetch: DatafetchService) {

  }

  ngOnInit(): void {
      this.datafetch.getAlerts().subscribe( res => {
        if(res && res.notifications) {
        this.alert_data = res.notifications;
        }
      })
  }

}
