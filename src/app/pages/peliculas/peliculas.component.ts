import { Component } from '@angular/core';
import { GenericCardContentComponent } from '../../shared/components/generic-card-content/generic-card-content.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [GenericCardContentComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {

}
