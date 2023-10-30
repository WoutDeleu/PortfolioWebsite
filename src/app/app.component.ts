import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  terminalView: boolean = false;
  production : boolean = environment.production;
}
