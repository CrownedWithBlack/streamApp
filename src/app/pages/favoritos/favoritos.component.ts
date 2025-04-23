import { Component } from '@angular/core';
import { GenericCardContentComponent } from '../../shared/components/generic-card-content/generic-card-content.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [GenericCardContentComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {

}
