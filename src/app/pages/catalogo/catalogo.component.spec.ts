import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoComponent } from './catalogo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadDataService } from '../../services/json/load-data.service';
import { ModalService } from '../../services/modals/modal.service';
import { of } from 'rxjs';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoComponent, HttpClientTestingModule],
      providers: [LoadDataService, ModalService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería crear una coleccion y agregar las peliculas de 3 en 3 #groupMovies', () => {
    //creamos una colección que simule los datos crudos del json
    const mockNonGroupedMovies: any[] = [
      {title: "Peli 1",review: "Review 1",titleID: "1",path: "path 1"},
      {title: "Peli 2",review: "Review 2",titleID: "2",path: "path 2"},
      {title: "Peli 3",review: "Review 3",titleID: "3",path: "path 3"},
      {title: "Peli 4",review: "Review 4",titleID: "4",path: "path 4"},
      {title: "Peli 5",review: "Review 5",titleID: "5",path: "path 5"},
      {title: "Peli 6",review: "Review 6",titleID: "6",path: "path 6"},
    ];

    //llamamos a la función groupMovies usando la notación de corchetes
    const groupedMovies = component['groupMovies'](mockNonGroupedMovies);
    //comprobamos si en la posición 0 y 1 contienen 3 peliculas
    expect(groupedMovies[0].length).toBe(3);
    expect(groupedMovies[1].length).toBe(3);
    
    /*
      No agregué una comprobación para ver si las peliculas coinciden, es decir
      Si "(Peli 1).toBe(Peli 1)" ya que eso le restaría reutilización futura al test
    */
  });

  it('Deberia llamar al modal ver pelicula #launchWatchMovieModal', () => {
    const watchModalSpy = spyOn(component['customModalService'], 'watchModal');//creamos un espia de la funcion watchModal
    component.launchWatchMovieModal('titulo modal', 1, 'review 1');//llamamos a la funcion real
    expect(watchModalSpy).toHaveBeenCalled();//checamos si la funcion fue llamada
    expect(watchModalSpy).toHaveBeenCalledWith('titulo modal', 1, 'review 1');
  });

  it('deberia llamar al modal ocultar pelicula #launchHideMovieModal', () => {
    const hideModalSpy = spyOn(component['customModalService'], 'hideModal');//creamos un espia de hideModal
    component.launchHideMovieModal('titulo modal', 1);//llamamos a la funcion real
    expect(hideModalSpy).toHaveBeenCalled();//checamos si la funcion fue llamada
  });

  it('deberia remover una pelicula de la vista #removeMovie', () => {
    const MOVIE_ID = 3;
    const mockMoviesPerSlide: any[][] = [
      [
        {title: "Peli 1", review: "Review 1", titleID: 1, path: "path 1"},
        {title: "Peli 2", review: "Review 2", titleID: 2, path: "path 2"},
        {title: "Peli 3", review: "Review 3", titleID: 3, path: "path 3"}
      ]
    ];

    component.moviesPerSlide = mockMoviesPerSlide;//inicializamos el moviesPerSlide del componente de prueba
    component.removeMovie(MOVIE_ID);//llamamos la funcion real y le pasamos el Id: 3

    expect(component.moviesPerSlide).toEqual([//comprobamos si la funcion removeMovie removio exitosamente a "Peli 3"
      [
        {title: "Peli 1", review: "Review 1", titleID: 1, path: "path 1"},
        {title: "Peli 2", review: "Review 2", titleID: 2, path: "path 2"}
      ]
    ])
  });

  it('debería cargar los datos desde el servicio #ngOnInit', () => {
    const mockData: any [] = [
      {title: "Peli 1", review: "Review 1", titleID: 1, path: "path 1"},
      {title: "Peli 2", review: "Review 2", titleID: 2, path: "path 2"},
      {title: "Peli 3", review: "Review 3", titleID: 3, path: "path 3"},
      {title: "Peli 4", review: "Review 4", titleID: 4, path: "path 4"},
      {title: "Peli 5", review: "Review 5", titleID: 5, path: "path 5"},
      {title: "Peli 6", review: "Review 6", titleID: 6, path: "path 6"},
      {title: "Peli 7", review: "Review 7", titleID: 7, path: "path 7"}
    ];

    const mockMoviesPerSlide: any[][] = [
      [
        {title: "Peli 1", review: "Review 1", titleID: 1, path: "path 1"},
        {title: "Peli 2", review: "Review 2", titleID: 2, path: "path 2"},
        {title: "Peli 3", review: "Review 3", titleID: 3, path: "path 3"}
      ],
      [
        {title: "Peli 4", review: "Review 4", titleID: 4, path: "path 4"},
        {title: "Peli 5", review: "Review 5", titleID: 5, path: "path 5"},
        {title: "Peli 6", review: "Review 6", titleID: 6, path: "path 6"}
      ],
      [ 
        {title: "Peli 7", review: "Review 7", titleID: 7, path: "path 7"},
      ]
    ];

    const getMoviesSpy = spyOn(component['loadDataService'], 'getMovies').and.returnValue(of(mockData));//creamos un espia de getMovies
    component.ngOnInit();//Se llama al onInit real
    expect(getMoviesSpy).toHaveBeenCalled();//comprovamos si fue llamado
    expect(component.moviesPerSlide).toEqual(mockMoviesPerSlide);
  });

});
