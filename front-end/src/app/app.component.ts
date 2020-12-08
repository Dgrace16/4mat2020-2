import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
  <app-main-toolbar [appName]="title"></app-main-toolbar>
    
    <div class= "content">
        <router-outlet></router-outlet>
    </div>
    <app-main-footer></app-main-footer>
  `,
    styles: []
})
export class AppComponent {
    title = 'Oficininha';
    home = "https://4200-b0d6d452-7165-42f4-80df-294417d48e14.ws-us03.gitpod.io";
}
