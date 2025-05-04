import { TestBed } from '@angular/core/testing';
import { LoadDataService } from './load-data.service';
import { Movie } from '../../interfaces/movie.interface';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

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
    service.getMovies().subscribe((movies: Movie[]) => {//llamamos al servicio real y checamos si sus datos conicidencon los datos mockeados que tenemos
      expect(movies).toEqual(mockMovie);
    });

    const req = httpMock.expectOne(jsonUrl);//esperamos una conexion de la url especificada
    expect(req.request.method).toBe('GET');//checamos si se uso el metodo get
    req.flush(mockMovie);//le decimos que fuerze el retorno de los datos de prueba
  });

  afterEach(() => {
    httpMock.verify();//checa que no hayay quedado ninguna conexion pendiente, si lo hay falla
  });

});
