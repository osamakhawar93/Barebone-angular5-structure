import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
}
