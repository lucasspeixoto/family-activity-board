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
  defaultElevation = 2;

  @Input()
  raisedElevation = 24;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.setElevation(this.defaultElevation);
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.setElevation(this.defaultElevation);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // remove all elevation classes
    const classesToRemove = Array.from(
      (<HTMLElement>this.element.nativeElement).classList
    ).filter(elementClass => elementClass.startsWith('mat-elevation-z'));
    classesToRemove.forEach(elementClass => {
      this.renderer.removeClass(this.element.nativeElement, elementClass);
    });

    // add the given elevation class
    const newClass = `mat-elevation-z${this.raisedElevation}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setElevation(this.defaultElevation);
  }

  setElevation(amount: number) {
    // remove all elevation classes
    const classesToRemove = Array.from(
      (<HTMLElement>this.element.nativeElement).classList
    ).filter(c => c.startsWith('mat-elevation-z'));
    classesToRemove.forEach(c => {
      this.renderer.removeClass(this.element.nativeElement, c);
    });

    // add the given elevation class
    const newClass = `mat-elevation-z${amount}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }
}
