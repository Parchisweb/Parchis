import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './site/components/blog/blog.component';
import { DetailsComponent } from './site/components/blog/details/details.component';

const routes: Routes = [
  {
    path:'admin',
    component:AccountComponent
  },
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
