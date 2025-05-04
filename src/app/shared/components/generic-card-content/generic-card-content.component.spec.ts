import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericCardContentComponent } from './generic-card-content.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('GenericCardContentComponent', () => {
  let component: GenericCardContentComponent;
  let fixture: ComponentFixture<GenericCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCardContentComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia cargar los datos desde el servicio de carga #ngOnInit', () => {
    const mockMoviesCollection: any[] = [
      {title: 'peli', movieId: 1, review: 'review', path: 'path'},
      {title: 'peli', movieId: 2, review: 'review', path: 'path'},
      {title: 'peli', movieId: 3, review: 'review', path: 'path'},
      {title: 'peli', movieId: 4, review: 'review', path: 'path'},
      {title: 'peli', movieId: 5, review: 'review', path: 'path'},
      {title: 'peli', movieId: 6, review: 'review', path: 'path'},
      {title: 'peli', movieId: 7, review: 'review', path: 'path'}
    ];
    //creamos un espia de getMovies y retornamos un observable con los datos de prueba
    const jsonServiceSpy = spyOn(component['jsonService'], 'getMovies').and.returnValue(of(mockMoviesCollection));
    component.ngOnInit();//llamamos al onIinit real

    expect(jsonServiceSpy).toHaveBeenCalled();//checamos si getMovies fue llamado
    expect(component.moviesCollection).toEqual(mockMoviesCollection);//comprobamos si los datos coinciden
  });

  it('deberia mostrar el modal #launchWatchMovieModal', () => {
    const title = 'titulo';
    const movieId = 1;
    const review = 'review';
    const watchModalSpy = spyOn(component['customModalService'], 'watchModal');//creamos un espia de watchModal
    component.launchWatchMovieModal(title, movieId, review);// se llama a la funcion real

    expect(watchModalSpy).toHaveBeenCalledWith(title, movieId, review);//comprobamos si fue llamado con los argumentos correctos
  })

  it('deberia mostar el modal #launchHideMovieModal', () => {
    const title = 'titulo';
    const movieId = 1;
    const hideModalSpy = spyOn(component['customModalService'], 'hideModal');//casi lo mismo que el test de arriba xd
    component.launchHideMovieModal(title, movieId);
    expect(hideModalSpy).toHaveBeenCalled();
  });

  it('deberia filtrar la coleccion de peliculas #removeMovie', () => {
    const mockMoviesCollection: any[] = [{title: 'peli', titleID: 1, review: 'review', path: 'path'}];
    component.moviesCollection = mockMoviesCollection;//se inicializa el atributo moviesCollection del componente de prueba
    component.removeMovie(1);//llamamos a la funcion real y le decimos que remueva la pelicula con el Id: 1

    expect(component['moviesCollection']).toEqual([]);
    //como lo inicializamos solo con un objeto cuyo id es 1 debería devolver un array vacio
    //y como debe borrar el Id: 1, debería devolver un array vacío
  });
});
