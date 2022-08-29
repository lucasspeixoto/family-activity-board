import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  public isShowSidebar!: boolean;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener!: () => void;

  public eventType = 'change';

  constructor(ChangeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => ChangeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener(this.eventType, this.mobileQueryListener);

    this.isShowSidebar = !this.mobileQuery.matches;
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener(
      this.eventType,
      this.mobileQueryListener
    );

    this.sidenav.close();
  }

  public toggleMenu(value: boolean): void {
    this.sidenav.toggle(value);
  }
}
