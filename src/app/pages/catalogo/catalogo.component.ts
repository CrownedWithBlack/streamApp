import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../services/json/load-data.service';
import { NgForOf } from '@angular/common';
import { ViewMoreModalComponent } from '../../shared/components/modals/view-more-modal/view-more-modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RemoveMovieComponent } from '../../shared/components/modals/remove-movie/remove-movie.component';

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

  constructor(private loadDataService: LoadDataService, private modalService:NgbModal ) {}

  ngOnInit(): void {
    
    this.loadDataService.getMovies().subscribe((movies) => {
      this.moviesPerSlide = this.groupMovies(movies, this.amountOfMoviesPerSlide);
    });

  }

  private groupMovies(movies: any[], groupSize: number): any[][] {
    const groupedMovies: any[][] = [];
    for (let i = 0; i < movies.length; i += groupSize) {
      groupedMovies.push(movies.slice(i, i + groupSize));
    }
    return groupedMovies;
  }

  launchWatchMovieModal(title: string, id: number, review: string): void {
    const modal = this.modalService.open(ViewMoreModalComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.body = review;
  }

  launchHideMovieModal(title: string, id:number): void {
    const modal = this.modalService.open(RemoveMovieComponent);
    modal.componentInstance.title = title;

    modal.result.then((response) => {
      if (response) {
        this.removeMovie(id);
      }
    });
  }

  private removeMovie(id: number): void {
    this.moviesPerSlide = this.moviesPerSlide.map((slide) =>
      slide.filter((movie) => movie.titleID !== id)
    );
  }
}
