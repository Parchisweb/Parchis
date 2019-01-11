import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements AfterViewInit {
  is_contact=false;
  constructor() { }

  ngAfterViewInit() {
    $.getScript('../assets/js/jquery.min.js');
    $.getScript('../assets/js/main.js');
    $.getScript('../assets/js/jquery.counterup.min.js'); 
  }
  toggle(){
    this.is_contact = !this.is_contact;
    this.ngAfterViewInit();
  }

}
