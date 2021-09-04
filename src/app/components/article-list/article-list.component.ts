import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService:ArticleService) { }

  get articles () {
    return this.articleService.articles;
  }

  ngOnInit(): void {
    this.articleService.fetcharticle();
  }

}
