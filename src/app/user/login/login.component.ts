import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    // checkedBox: boolean;
    // constructor() {
    //   this.checkedBox = true;
    // }
    @Input() isAuthenticated: any;
    constructor() {
      this.isAuthenticated = false;
    }
    // ngOnInit() {
    //   this.isAuthenticated = false;
    // }
    radioChange(event: any) {
      console.log(event.target.value);
    }
    formSubmit(event: SubmitEvent) {
      event.preventDefault();
      console.log(event.target);
    }
}
