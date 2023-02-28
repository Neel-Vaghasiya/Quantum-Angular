import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() isAuthenticated: boolean | undefined;
  isEntered: boolean = false;
  isEnteredAnc: boolean = false;
  isEnteredHam: boolean = false;
  inHam: boolean = false;
  clickedHamItem: any;

  ngOnInit() {
    console.log(this.isAuthenticated)
  }
  
  OnMouseLeave() {
    this.isEntered = false;
  }

  OnMouseEnter() {
    this.isEntered = true;
  }

  OnMouseLeaveAnc() {
    this.isEnteredAnc = false;
  }

  OnMouseEnterAnc() {
    this.isEnteredAnc = true;
  }

  OnMouseEnterHam() {
    this.isEnteredHam = true;
    this.inHam = true;
  }

  OnMouseLeaveHam() {
    this.inHam = false;
    setTimeout(()=>{
      if(!this.inHam) {
        this.isEnteredHam = false;
      }
    },200)
  }

  OnHamItemClick(ref: any) {
    this.clickedHamItem = ref;
    console.log("ham item click")
  }
}
