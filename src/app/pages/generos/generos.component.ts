import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../services/json/load-data.service';
import { Movie } from '../../interfaces/movie.interface';
import { ModalService } from '../../services/modals/modal.service';


@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.scss'
})

export class GenerosComponent implements OnInit{
  moviesCollection: Movie[] = [];

  constructor(private jsonService: LoadDataService, private customModalService: ModalService) {}

  ngOnInit(): void {
    this.jsonService.getMovies().subscribe(movies => {
      movies.forEach(movie => this.moviesCollection.push(movie));
      console.log(this.moviesCollection)

    })
  }

  launchWatchMovieModal(title: string, id: number, review: string): void {
    this.customModalService.watchModal(title, id, review);
  }

  launchHideMovieModal(title: string, id: number): void {
    this.customModalService.hideModal(title, id, () => {
      this.removeMovie(id);
    });
  }

  removeMovie(id: number): void {
    this.moviesCollection = this.moviesCollection.filter((movie) => movie.titleID !== id);
    console.log(this.moviesCollection);
  }
  
}
