import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  private jsonURL: string = './assets/json/reviews.json';

  constructor(private httpClient: HttpClient) { }

  //traemos los datos del json usando hhtpClient y la interfaz Movie
  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.jsonURL);
  }
}
