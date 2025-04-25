import { TestBed } from '@angular/core/testing';
import { LoadDataService } from './load-data.service';
import { Movie } from '../../interfaces/movie.interface';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('LoadDataService', () => {
  let service: LoadDataService;
  let httpMock: HttpTestingController;

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
      providers: [LoadDataService, provideHttpClientTesting(), provideHttpClient()]
    });
    service = TestBed.inject(LoadDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería traer un array de peliculas', () => {
    service.getMovies().subscribe((movies) => {
      expect(movies).toEqual(mockMovie);
    });

    const req = httpMock.expectOne('assets/json/reviews.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockMovie);
    


  });



});
