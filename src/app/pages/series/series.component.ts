import { Component } from '@angular/core';
import { GenericCardContentComponent } from '../../shared/components/generic-card-content/generic-card-content.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [GenericCardContentComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {

}
