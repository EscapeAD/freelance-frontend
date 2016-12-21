import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `
  <h1>Navigation</h1>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: 'This is the Dashboard';
}
