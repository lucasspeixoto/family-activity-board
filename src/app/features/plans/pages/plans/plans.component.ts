import * as fromApp from '@app/app.state';

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public ngOnInit(): void {
    console.log('Planejamentos');
    //this._store.dispatch(LoadUser());
  }
}
