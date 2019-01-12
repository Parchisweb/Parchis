import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { LoginService } from 'src/app/account/login.service';
declare var $:any
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit{
  subs
  id:any=null;
  blog:any=null;
  editable=false;
  constructor(private route:ActivatedRoute, private BS:BlogService, private LS:LoginService) { 
    this.BS.addChild(this);
    this.LS.addChild(this);
  }

  ngAfterViewInit() {
   
    this.subs = this.route.params.subscribe(params=>{
      this.id=params['id'];
      $.getScript('../assets/js/jquery.min.js');
      $.getScript('../assets/js/main.js');
      $.getScript('../assets/js/jquery.counterup.min.js');
    })
  }
  refresh(){
    for(let blog of this.BS.blog_list){

      if(blog.name==this.id){
        this.blog=blog;
        if(this.blog.body.disc==undefined)
        this.blog.body=JSON.parse(blog.body);
        break;
      }
     
    }
    console.log(this.blog);
      
  }

}
