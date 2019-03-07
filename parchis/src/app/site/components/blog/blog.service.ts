import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/account/login.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blog_list: any = [];
  child_elements = [];
  constructor(private LS: LoginService) { this.getBlogs(); }
  createBlog(name) {
    this.LS.http.post(this.LS.serverurl + 'blogs/blog/', new HttpParams()
                                .set('name', name)
                                .set('creator', this.LS.user.url)
                                // .set('category', this.LS.serverurl+'blogs/blogcategory/1/')
                                .set('blog_type', '1')
                                .set('preview', JSON.stringify({
                                  name : 'User Name',
                                  date : '10 Dec 2019',
                                  img_url : 'assets/img/details.jpg',
                                  disc : 'Description'
                                })),
                                {
                                  headers : this.LS.getHeaders()
                                }
                      ).subscribe(data => {

                            // success
                            this.refresh();
                            this.getBlogs();
                            console.log(data);
                      });
  }

  refresh() {
    // console.log(this.child_elements);
// tslint:disable-next-line: forin
    for (const x in this.child_elements) {
      this.child_elements[x].refresh();
    }
  }
  addChild(x: any) {
// tslint:disable-next-line: triple-equals
    if (this.child_elements.indexOf(x) == -1) {
      this.child_elements.push(x);
    }
  }
  getBlogs() {
    this.LS.http.get(this.LS.serverurl + 'blogs/blog/', {headers: this.LS.getHeaders()})
      .subscribe(data => {

        this.blog_list = data;
        for (const x in this.blog_list) {
// tslint:disable-next-line: triple-equals
          if (this.blog_list[x].preview.disc == undefined) {
            this.blog_list[x].preview = JSON.parse(this.blog_list[x].preview);
          }
        }
        this.refresh();
      });
  }
 
  updateBlogBody(url, body){
    this.LS.http.patch(url,
        new HttpParams().set('body', body)
        , {
          headers: this.LS.getHeaders()
        }).subscribe(data => {
          this.getBlogs();
        }, error => {
          console.log(error);
        });
  }
  updateBlog(url, blog_name, username, date, img_url, discription) {
// tslint:disable-next-line: triple-equals
    if (img_url.indexOf('https://drive.google.com/file/d/') != -1) {
      // drive image
      img_url = 'https://drive.google.com/uc?export=view&id=' + img_url.split('/')[5];
    }
    console.log(url, blog_name, username, date, img_url, discription);
    this.LS.http.patch(url+'?do=1',
        new HttpParams()
          .set('name', blog_name)
          .set('preview', JSON.stringify({
            username: username,
            date: date,
            img_url: img_url,
            disc: discription
          }))
        , {
          headers: this.LS.getHeaders()
        }).subscribe(data => {
// tslint:disable-next-line: whitespace
          window.location.href='/blog/'+blog_name;
        }, error => {
          console.log(error);
        });
  }
}
