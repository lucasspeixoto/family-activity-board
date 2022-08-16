import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthenticationService } from '@authS/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isMenuOpened!: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  constructor(private readonly _authenticationService: AuthenticationService) {}

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this._authenticationService.signOut();
  }
}
