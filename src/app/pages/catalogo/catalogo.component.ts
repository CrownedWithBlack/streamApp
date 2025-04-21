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
  moviesPerSlide: any[][] = [];
  private amountOfMoviesPerSlide: number = 3;

  constructor(private loadDataService: LoadDataService, private customModalService: ModalService ) {}

  ngOnInit(): void {
    
    this.loadDataService.getMovies().subscribe((movies) => {
      this.moviesPerSlide = this.groupMovies(movies);
    });

  }

  private groupMovies(movies: any[]): any[][] {
    const groupedMovies: any[][] = [];
    for (let i = 0; i < movies.length; i += this.amountOfMoviesPerSlide) {
      groupedMovies.push(movies.slice(i, i + this.amountOfMoviesPerSlide));
    }
    return groupedMovies;
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
    this.moviesPerSlide = this.moviesPerSlide.map((slide) =>
      slide.filter((movie) => movie.titleID !== id)
    );
    console.log(this.moviesPerSlide);
  }
}
