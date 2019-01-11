import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $.getScript('../assets/js/main.js');
  }


}
