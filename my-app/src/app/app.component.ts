import { AfterViewChecked, Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'my-app';
  appVersion = VERSION;

  constructor() {
    console.log(this.title, VERSION);
  }

  ngAfterViewChecked(): void {
    console.log('AFTER VIEW CHECKED', this.title);
  }

  clickme() {
    alert(this.title);
  }

}
