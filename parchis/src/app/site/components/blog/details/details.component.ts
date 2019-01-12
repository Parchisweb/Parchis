import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { LoginService } from 'src/app/account/login.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  subs
  id:any=null;
  blog:any=null;
  editable=false;
  constructor(private route:ActivatedRoute, private BS:BlogService, private LS:LoginService) { 
    this.BS.addChild(this);
    this.LS.addChild(this);
  }

  ngOnInit() {
    this.subs = this.route.params.subscribe(params=>{
      this.id=params['id'];
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
      console.log(blog);
      
    }
  }

}
