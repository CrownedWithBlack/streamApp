import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { LoadDataService } from '../../services/json/load-data.service';
import { ModalService } from '../../services/modals/modal.service';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent implements OnInit{
  //array que contiene la lista de peliculas, lo datos se cargan dentro del OnInit
  moviesCollection: Movie[] = [];

  constructor(private jsonService: LoadDataService, private customModalService: ModalService) {}

  ngOnInit(): void {
    //llama al servicio que nos trae los datos del json
    this.jsonService.getMovies().subscribe(movies => {
      movies.forEach(movie => this.moviesCollection.push(movie));
      console.log(this.moviesCollection)
    })
  }

  //Esta función se dispara desde el template HMTL con el evento (click)
  launchWatchMovieModal(title: string, id: number, review: string): void {
    this.customModalService.watchModal(title, id, review);//lama al servicio de modals y muestra el respectivo modal
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
    this.moviesCollection = this.moviesCollection.filter((movie) => movie.titleID !== id);
    console.log(this.moviesCollection);
  }
}
