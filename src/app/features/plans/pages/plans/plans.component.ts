import * as fromApp from '@app/app.state';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlansComponent {
  constructor(private readonly _store: Store<fromApp.AppState>) {}
}
