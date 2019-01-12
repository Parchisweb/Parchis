import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { SiteComponent } from './site/site.component';
import { BlogComponent } from './site/components/blog/blog.component';
import { CommentComponent } from './site/components/blog/comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './site/components/contact/contact.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';

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
    AccountComponent,
    SiteComponent,
    BlogComponent,
    CommentComponent,
    ContactComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:false}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
