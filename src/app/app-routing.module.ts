import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';

const routes: Routes = [
  {path: "userlist", component: UserListComponent},
  {path: "useradd", component: UserAddComponent},
  {path: "postlist", component: PostListComponent},
  {path: "postadd", component: PostAddComponent},
  {path: "postlist/:id", component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
