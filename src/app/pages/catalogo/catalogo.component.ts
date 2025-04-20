import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../services/json/load-data.service';
import { NgForOf } from '@angular/common';
import { pipe, map } from  'rxjs';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent implements OnInit{
  moviesPerSlide: any[][] = [];
  
  constructor(private loadDataService: LoadDataService) {}

  ngOnInit(): void {
    const amountOfMoviesPerSlide = 3;



    this.loadDataService.getMovies().subscribe((movies) => {
      this.moviesPerSlide = this.groupMoviesInSets(movies, amountOfMoviesPerSlide);
      console.log('Movies grouped in sets of 3:', this.moviesPerSlide);
    });

    
  }

  private groupMoviesInSets(movies: any[], groupSize: number): any[][] {
    const groupedMovies: any[][] = [];
    for (let i = 0; i < movies.length; i += groupSize) {
      groupedMovies.push(movies.slice(i, i + groupSize));
    }
    return groupedMovies;
  }
}
