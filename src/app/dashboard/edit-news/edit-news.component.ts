import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from 'src/app/core/services/newsService/news.service';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  constructor(private route: Router, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute, private newsService: NewsService) { }

  editNewsForm: FormGroup;
  currentNewsId: string;
  newsToBeEdited: INewsDetails;
  ngOnInit(): void {
    this.editNewsForm = this.formBuilder.group({
      headline: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      source: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      summary: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(200)]],
      content: ['', [Validators.minLength(200)]],
  });

    this.activatedRoute.queryParams.subscribe(params => {
    this.currentNewsId = params.id;
  });

    this.newsService.getNewsById(this.currentNewsId).subscribe(data => {
    this.newsToBeEdited = data;
    this.createEditNewForm(this.newsToBeEdited);
  });

}

createEditNewForm(news: INewsDetails) {
  this.editNewsForm.patchValue({
    id: news.id,
    headline: news.headline,
    source: news.source,
    summary: news.summary,
    content: news.content
  });
}

save(editedNews: INewsDetails) {
  this.newsService.editNews(this.currentNewsId, editedNews).subscribe(data => {
    console.log(data);
    this.route.navigateByUrl('/dashboard/news');
  },
  error => {
    console.error('error while editing news', error);
  }
  );
}

}
