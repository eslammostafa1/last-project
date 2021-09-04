import { Component, Input, OnInit } from '@angular/core';
import { ARTICLE, defaultArticle } from 'src/app/interface/article.interface';
import { ArticleService } from 'src/app/service/article.service'

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  constructor(private articleService:ArticleService ) { }
  
  @Input() article:ARTICLE = defaultArticle;
  
  ngOnInit(): void {
    console.log(this.article)
  }

  deleteArticle(){
    this.articleService.delecteArticle(this.article._id)
  }

}
