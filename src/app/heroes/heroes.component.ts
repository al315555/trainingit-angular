import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  title = environment.appName + ' hello world ;-) ' + 'dfasf';

  constructor() { }

  ngOnInit() {
  }

}
