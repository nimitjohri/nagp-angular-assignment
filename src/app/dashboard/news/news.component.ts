import { Component, OnInit } from '@angular/core';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
import { NewsService } from 'src/app/core/services/newsService/news.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  constructor(private newsService: NewsService, private router: Router) { }

  newsArr: INewsDetails[];

  currentNews: INewsDetails;

  isLoggedIn = false;
  username = '';

  ngOnInit(): void {
    if (localStorage.getItem('TOKEN') !== null) {
      this.username = localStorage.getItem('username');
      this.isLoggedIn = true;
    }
    this.newsService.getNews().subscribe(data => {
      this.newsArr = data;
      console.log(this.newsArr);
    });
  }

  showModal(news: INewsDetails) {
    this.currentNews = news;
  }

  editNews(id: number) {
    console.log(id);
  }
  deleteNews(id: string) {
    this.newsService.deleteNews(id)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigateByUrl('/');
      }
    );
  }

}
