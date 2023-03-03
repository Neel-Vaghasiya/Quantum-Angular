import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    isAuthenticated: boolean= false;
    preview: boolean = false;
    constructor() {
      this.isAuthenticated = false;
    }
    radioChange(event: any) {
      console.log(event.target.value);
    }
    formSubmit(event: SubmitEvent) {
      event.preventDefault();
      console.log(event.target);
    }
}
