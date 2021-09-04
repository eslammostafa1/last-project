import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HomeComponent } from './views/home/home.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleListItemComponent } from './components/article-list-item/article-list-item.component';
import { ActionBarComponent } from './components/bars/action-bar/action-bar.component';
import { ArticleFormComponent } from './views/article-form/article-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DefaultBarComponent,
    NotFoundComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    ActionBarComponent,
    ArticleFormComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
