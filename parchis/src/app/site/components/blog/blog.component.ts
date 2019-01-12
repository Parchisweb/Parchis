import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './blog.service';
import { LoginService } from 'src/app/account/login.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  subs
  id
  blog:any=null;
  edit_mode=false;
  constructor(private route:ActivatedRoute, private BS:BlogService, private LS:LoginService) {
    this.BS.addChild(this);
  }

  ngOnInit() {
    this.subs = this.route.params.subscribe(params=>{
      this.id=params['id']
    })
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
