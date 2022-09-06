import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appUpElevation]',
})
export class UpElevationDirective implements OnChanges {
  @Input()
  public defaultElevation = 2;

  @Input()
  public raisedElevation = 24;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.setElevation(this.defaultElevation);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public ngOnChanges(_changes: SimpleChanges): void {
    this.setElevation(this.defaultElevation);
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.setElevation(this.raisedElevation);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.setElevation(this.defaultElevation);
  }

  public setElevation(elevatedValue: number): void {
    const classesToRemove = Array.from(
      (<HTMLElement>this.element.nativeElement).classList
    ).filter(elementClass => elementClass.startsWith('mat-elevation-z'));
    classesToRemove.forEach(elementClass => {
      this.renderer.removeClass(this.element.nativeElement, elementClass);
    });

    const newClass = `mat-elevation-z${elevatedValue}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }
}
