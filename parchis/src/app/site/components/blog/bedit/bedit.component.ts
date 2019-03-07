import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { LoginService } from 'src/app/account/login.service';

declare var $:any;

@Component({
  selector: 'app-bedit',
  templateUrl: './bedit.component.html',
  styleUrls: ['./bedit.component.scss']
})
export class BeditComponent implements AfterViewInit {

  subs;
  id: any = null;
  blog: any = null;
  editable = false;
  constructor(private route: ActivatedRoute, private BS: BlogService, private LS: LoginService) {
    this.BS.addChild(this);
    this.LS.addChild(this);
  }

  ngAfterViewInit() {

    this.subs = this.route.params.subscribe(params => {
      this.id = params['id'];
      // $.getScript('../assets/js/jquery.min.js');
      // $.getScript('../assets/js/main.js');
      // $.getScript('../assets/js/jquery.counterup.min.js');
    });
  }
  loaded(self){
        document.getElementById('editorframe')['contentWindow'].$('textarea').html(self.blog.body);
        document.getElementById('editorframe')['contentWindow'].$('textarea').froalaEditor();
  }
  get(){
    return document.getElementById('editorframe')['contentWindow'].$('textarea').froalaEditor('html.get');
  }
  save(){
    this.BS.updateBlogBody(this.blog.url, this.get());
  }
  refresh() {
    for (const blog of this.BS.blog_list) {

// tslint:disable-next-line: triple-equals
      if (blog.name == this.id) {
        this.blog = blog;
        break;
      }

    }
    document.getElementById('editorframe')['src']='/assets/bedit/index.html';
      var self=this;
      document.getElementById('editorframe')['onload']=()=>self.loaded(self);
      
    console.log(this.blog);

  }

}
