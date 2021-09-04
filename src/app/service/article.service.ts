import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from 'src/app/interface/article.interface'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient, private userService:UserService , private router:Router) { }
  
  
  articles: ARTICLE[] = []

  private baseUrl='http://localhost:3000/article'
  private get headers(){
    return {
     headers:{
      'Authorization':this.userService.getToken(),
     },
    }
  }

  fetcharticle(){
    this.http.get<{
      articles: ARTICLE[]
    }>(this.baseUrl,this.headers).subscribe(
      data => this.articles = data.articles,
      error =>  console.log(error)
    )
  }
  
  createArticle(data: {title:string, content:string}){
    this.http.post<{articles: ARTICLE}>(this.baseUrl, data,this.headers ).subscribe(
      data => {
        this.articles.push(data.articles);
        this.router.navigateByUrl("/")
      }
    )
  }

  getArticleById(id:string){
    this.articles.find(art => art._id == id)
  }

  updateArticle(data:{
    id:string;
    title:string;
    content:string;
  }){
    this.http.put(`${this.baseUrl}/${data.id}`,data,this.headers).subscribe(
      data => {this.router.navigateByUrl('/')},
      error => console.log(error)
    )
  }

  delecteArticle(id:string){
    this.http.delete(`${this.baseUrl}/${id}`,this.headers).subscribe(
      data => {
        const articleIndex = this.articles.findIndex(art => art._id == id)
        if(articleIndex > -1){
          this.articles.splice(articleIndex,1)
        }
      },
      error => console.log(error)
    )
  }

}
