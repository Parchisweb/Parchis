import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/account/login.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blog_list:any=[]
  constructor(private LS:LoginService) { this.getBlogs();}
  createBlog(name){
    this.LS.http.post(this.LS.serverurl+'blogs/blog/', new HttpParams()
                                .set('name', name)
                                .set('creator', this.LS.user.url)
                                .set('category', this.LS.serverurl+'blogs/blogcategory/1/')
                                .set('blog_type', '1')
                                .set("body", JSON.stringify({

                                })),
                                {
                                  headers:this.LS.getHeaders()
                                }
                      ).subscribe(data=>{

                            // success
                            this.refresh();
                            this.getBlogs();
                            console.log(data);
                      })
  }
  //refresh childs
  child_elements=[];
  refresh(){
    //console.log(this.child_elements);
    for(let x in this.child_elements){
      this.child_elements[x].refresh();
    }
  }
  addChild(x:any){
    if(this.child_elements.indexOf(x)==-1){
      this.child_elements.push(x);
    }
  }
  getBlogs(){
    this.LS.http.get(this.LS.serverurl+'blogs/blog/', {headers:this.LS.getHeaders()})
      .subscribe(data=>{
        this.blog_list=data;
        console.log(data);
        this.refresh();
      })
  }
}
