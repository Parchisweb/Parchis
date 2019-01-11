import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { BlogComponent } from './site/components/blog/blog.component';
import { CommentComponent } from './site/components/blog/comment/comment.component';

const appRoutes: Routes = [
  {path:'', component: SiteComponent},
  { path: 'site', component: SiteComponent,
    children: [
      {path: 'blog', component:BlogComponent},
      { path: '',
        redirectTo: './site',
        pathMatch: 'full'
      },
    ]
  },
];
@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    BlogComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
