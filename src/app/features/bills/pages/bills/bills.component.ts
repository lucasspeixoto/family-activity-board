import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    console.log('...');
  }
}
