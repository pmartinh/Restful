import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms'; 
import { GitHubService } from './github.service'; 

@Component({
  selector: 'app-root', 
  template: `
  <ul>
    <li><a routerLink="">Home</a></li>
    <li><a routerLink="GitHub">GitHub</a></li>
  </ul>
  <router-outlet></router-outlet>                                                         
    `,
  providers: []
    
})
export class AppComponent {

  constructor(){
  }

}
