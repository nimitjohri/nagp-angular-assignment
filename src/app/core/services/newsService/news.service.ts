import { Injectable } from '@angular/core';
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = 'api/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<INewsDetails[]> {
    return this.http.get<INewsDetails[]>(this.apiUrl);
  }

  addNews(addNews: INewsDetails): Observable<INewsDetails> {
    return this.http.post<INewsDetails>(this.apiUrl, addNews).pipe(
      catchError(this.handleError)
    );
  }

  deleteNews(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
    .pipe(catchError(this.handleError));
  }

  editNews(id: string, editedNews: INewsDetails): Observable<INewsDetails> {
    return this.http.put<INewsDetails>(this.apiUrl, editedNews)
    .pipe(catchError(this.handleError));
  }

  getNewsById(id: string): Observable<INewsDetails> {
    return this.http.get<INewsDetails>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
