import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public defaultElevation = 2;
  public raisedElevation = 8;
  public readonly year = new Date().getFullYear();

  constructor() {}

  ngOnInit() {
    console.log('Start Login...');
  }
}
