import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './site/components/blog/blog.component';
import { DetailsComponent } from './site/components/blog/details/details.component';
import { ContactComponent } from './site/components/contact/contact.component';
const routes: Routes = [
  {
    path:'admin',
    component:AccountComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  /*{
    path:'blog/:id',
    component:BlogComponent
  },*/
  {
    path:'blogs',
    component:BlogComponent
  },
  {
    path:'blog/:id',
    component:DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
