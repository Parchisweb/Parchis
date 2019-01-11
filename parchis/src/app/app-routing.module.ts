import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './site/components/blog/blog.component';

const routes: Routes = [
  {
    path:'admin',
    component:AccountComponent
  },
  {
    path:'blog/:id',
    component:BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
