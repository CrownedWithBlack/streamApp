import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../services/json/load-data.service';
import { NgForOf } from '@angular/common';
import { ModalService } from '../../services/modals/modal.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent implements OnInit{
//2d array que contendrá las peliculas a cargar, es 2d ya que el carrusel de bootsrap contiene X cards por slide, ejemplo:
//moviesPerSlide[lote1][pel1,peli2,peli3], moviesPerSlide[lote2][pel4,peli5,peli6]
  moviesPerSlide: any[][] = [];
  private amountOfMoviesPerSlide: number = 3;//determina el tamaño del lote del array moviesPerSlide

  constructor(private loadDataService: LoadDataService, private customModalService: ModalService ) {}

  ngOnInit(): void {
    //se llama al servicio que nos trae los datos del json
    this.loadDataService.getMovies().subscribe((movies) => {
      this.moviesPerSlide = this.groupMovies(movies);
    });
  }
  
  //agrupa las peliculas dentro del array: moviesPerSlide en base a la cantidad seleccionada en la variable: amountOfMoviesPerSlide
  //En este caso las agrupa de 3 en 3
  private groupMovies(movies: any[]): any[][] {
    const groupedMovies: any[][] = [];
    for (let i = 0; i < movies.length; i += this.amountOfMoviesPerSlide) {
      groupedMovies.push(movies.slice(i, i + this.amountOfMoviesPerSlide));
    }
    return groupedMovies;
  }

  //Esta función se dispara desde el template HMTL con el evento (click)
  launchWatchMovieModal(title: string, id: number, review: string): void {
    this.customModalService.watchModal(title, id, review); //lama al servicio de modals y muestra el respectivo modal
  }

  //Esta función se dispara desde el template HMTL con el evento (click)
  launchHideMovieModal(title: string, id: number): void {
    //lama al servicio de modals y una función callback que espera por la respuesta del modal, si la respuesta es true, se ejecuta el código
    this.customModalService.hideModal(title, id, () => {
      this.removeMovie(id);
    });
  }

  //esta función filtra el array de peliculas para eliminar la pelicula seleccionada por el usuario
  removeMovie(id: number): void {
    this.moviesPerSlide = this.moviesPerSlide.map((slide) =>
      slide.filter((movie) => movie.titleID !== id)
    );
  }
}
