import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  @Input() course!: any;
  @Input() total_classes: any;

  ngOnInit() {
    // console.log(this.courses_data);
  }

}
