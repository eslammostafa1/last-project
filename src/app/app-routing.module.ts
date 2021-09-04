import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ArticleFormComponent } from './views/article-form/article-form.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{
  path:'signup',
  component: SignupComponent
},
{
  path:'signin',
  component:SigninComponent
},
{
  path:'articleForm/:id',
  component:ArticleFormComponent
},
{
  path:'**',
  component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
