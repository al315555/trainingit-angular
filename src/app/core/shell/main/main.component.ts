import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../shell.component.scss']
})
export class MainComponent implements OnInit {

  title = environment.appName + ' hello world ;-) ' + 'dfasf';


  constructor() { }

  ngOnInit() {
  }

}
