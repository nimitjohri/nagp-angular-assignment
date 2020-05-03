import { NewsService } from './news.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CovidInMemoryDataService } from 'src/app/shared/inMemoryDataServices/covid-in-memory-data.service';
describe('NewsService', () => {
  let newsService: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
          ],
      providers: [NewsService]
    });
    newsService = TestBed.inject(NewsService);
  });

  // it('expect service to return news',
  // inject ([HttpTestingController],
  //   (httpMock: HttpTestingController) => {
  //     // const mockNews: INewsDetails[] = [
  //     //   {
  //     //     id: '1',
  //     //     headline: 'headline 1',
  //     //     source: 'News 24',
  //     //     summary: 'summary 1',
  //     //     content: 'conten 1',
  //     //     createdAt: new Date(),
  //     //   },
  //     //   {
  //     //     id: '2',
  //     //     headline: 'headline 2',
  //     //     source: 'News 24',
  //     //     summary: 'summary 2',
  //     //     content: 'conten 2',
  //     //     createdAt: new Date(),
  //     //   }];

  //     newsService.getNews().subscribe(data => {
  //       expect(data.length).toBe(5);
  //     });

  //     const mockReq = httpMock.expectOne('http://localhost:4200/api/news');
  //     expect(mockReq.request.method).toEqual('GET');

  //     httpMock.verify();

  //   })


  // );
  it('should create', () => {
    expect(newsService).toBeTruthy();
  });

});
