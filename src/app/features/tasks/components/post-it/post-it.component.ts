import { Component, Input } from '@angular/core';

type Colors = 1 | 2 | 3 | 4 | 5;

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss'],
})
export class PostItComponent {
  @Input()
  public text!: string;

  @Input()
  public date!: string;

  @Input()
  public color!: Colors;
}
