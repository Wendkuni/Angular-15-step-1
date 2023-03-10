import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blogs/blog-page/blog-page.component';
import { PostComponent } from './blogs/post/post.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'blog', component:BlogPageComponent},
  {path:'blog/my-best-blog', component:PostComponent},
  {path:'admin/blog', component:AdminBlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
