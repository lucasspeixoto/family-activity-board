import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authS/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isMenuOpened!: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  constructor(
    private readonly router: Router,
    private readonly _authenticationService: AuthenticationService
  ) {}

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this._authenticationService.signOut();
  }
}
