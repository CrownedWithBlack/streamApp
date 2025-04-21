import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  private jsonURL = './assets/json/reviews.json';

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.jsonURL);
  }

  getPosters(): Observable<any> {
    return this.httpClient.get<any[]>(this.jsonURL)
    .pipe(map(movies => movies.map(movie => movie.path)));
  }

  getMovieName(): Observable<any> {
    return this.httpClient.get<any>(this.jsonURL);
  }
}
