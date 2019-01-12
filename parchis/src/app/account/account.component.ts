import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private LS:LoginService) { 
    LS.addChild(this);
  }

  ngOnInit() {
    this.refresh();
  }
  submit(username, pwd){
    this.LS.login(username, pwd);
  }
  refresh(){
    if(this.LS.data.islogged){
      //alert('hurrey u r logged');
    }
  }

}
