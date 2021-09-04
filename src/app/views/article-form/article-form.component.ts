import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  editMode:Boolean = false
  artcleId:string = ''
  title:string = ''
  content:string = ''
 

  constructor(
    private articleService:ArticleService , 
    private route:ActivatedRoute, 
    private router:Router
    ) { }

  ngOnInit():  void  {
    
    const id = this.route.snapshot.params.articleId

    if(id != 'new'){
      this.editMode =true;
      this.artcleId = id;

      const article = this.articleService.getArticleById(id)
      // if(article){
      //   this.title = article.title;
      //   this.content = article.content;
      // } else {
        this.router.navigateByUrl('/notFound')
      // }
    }
  }

  submit(){
    if (this.editMode){
       this.articleService.updateArticle({
         id:this.artcleId,
         title:this.title,
         content:this.content
       })
    } else {

    
    this.articleService.createArticle({title:this.title, content:this.content})
   }
  }
}
