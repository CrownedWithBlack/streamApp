import { TestBed, waitForAsync } from '@angular/core/testing';
import { LoadDataService } from './load-data.service';
import { Movie } from '../../interfaces/movie.interface';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('LoadDataService', () => {
  let service: LoadDataService;
  let httpMock: HttpTestingController;
  const jsonUrl = 'assets/json/reviews.json';

  let mockMovie: Movie[] = [
    {
    "title": "Avatar 1",
    "review": "Una aventura visual en un mundo alienígena lleno de maravillas naturales.",
    "titleID": 1,
    "path": "assets/images/webp/posters/avatar1.webp"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadDataService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoadDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería traer un array de peliculas',() => {
    service.getMovies().subscribe((movies: Movie[]) => {
      expect(movies).toEqual(mockMovie);
    });

    const req = httpMock.expectOne(jsonUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockMovie);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
