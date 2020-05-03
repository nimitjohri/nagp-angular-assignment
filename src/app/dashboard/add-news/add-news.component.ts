import { Component, OnInit } from '@angular/core';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from 'src/app/core/services/newsService/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  news: INewsDetails;
  newsForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private newsService: NewsService,
              private router: Router) { }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      headline: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(50)]],
      source: ['anonymous', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      summary: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(200)]],
      content: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  save(addNews: INewsDetails) {
    this.newsService.addNews(addNews).subscribe();
    this.router.navigate(['dashboard/news']);
    console.log(addNews);
  }

}
