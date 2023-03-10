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
}
