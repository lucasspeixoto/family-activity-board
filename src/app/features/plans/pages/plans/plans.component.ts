import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/authentication/services/authentication.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  constructor(private readonly _authenticationService: AuthenticationService) {}

  public ngOnInit(): void {
    console.log('');
  }
}
