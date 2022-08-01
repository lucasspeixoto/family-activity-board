import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'family-activity-board';

  public test() {
    const test = 'teSt';

    console.log(test);
  }
}
