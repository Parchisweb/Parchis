import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoginService } from '../login.service';
import { BlogService } from 'src/app/site/components/blog/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private LS:LoginService, private cdr:ChangeDetectorRef, private BS:BlogService) { 
    LS.addChild(this);
    BS.addChild(this);
  }
  nav_selected="My Account"
  nav_list=[
    "My Account",
    "Site Admins",
    "Blogs",
    "Logout"
  ]
  ngOnInit() {
  }
  nav(val){
    this.nav_selected=val;
    if(val=='Logout') this.LS.logout();
    console.log(this.LS.user);
  }
  refresh(){
    this.cdr.detectChanges();
  }
}
