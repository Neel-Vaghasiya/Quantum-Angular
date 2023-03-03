import { Component, Input, OnInit } from '@angular/core';
import { DatafetchService } from 'src/app/core/datafetch.service';
import { CoursesObject, DataObject } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isAuthenticated: boolean = true;
  courses: CoursesObject[] = [];
  res: any;
  total_classes: number = 0;

  constructor(private datafetch: DatafetchService) {
    this.isAuthenticated = true;
  }

  ngOnInit() {
    this.isAuthenticated = true;
    this.total_classes = 4;

    this.datafetch.getData().subscribe(res => {
      this.res = res;
      this.courses = this.res.courses;
      this.total_classes = this.res.total_classes;
    }); 
  }
}
