import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './blog.service';
import { LoginService } from 'src/app/account/login.service';
declare var $:any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit{
  subs
  id
  blog:any=null;
  edit_mode=false;
  constructor(private route:ActivatedRoute, private BS:BlogService, private LS:LoginService) {
    this.BS.addChild(this);
  }
  ngAfterViewInit() {
    this.subs = this.route.params.subscribe(params=>{
      this.id=params['id']
    })
    $.getScript('../assets/js/jquery.min.js');
    $.getScript('../assets/js/main.js');
    $.getScript('../assets/js/jquery.counterup.min.js');
  }

  ngOnInit() {
    
  }
  refresh(){
    for(let blog of this.BS.blog_list){
      if(blog.name==this.id)
        {
          this.blog=blog;
          console.log(this.blog);
          break;
        }
    }
  }

}
