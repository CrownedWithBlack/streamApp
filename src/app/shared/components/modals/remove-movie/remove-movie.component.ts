import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-movie',
  standalone: true,
  imports: [],
  templateUrl: './remove-movie.component.html',
  styleUrl: './remove-movie.component.scss'
})
export class RemoveMovieComponent {
@Input() title = '';
@Input() titleID = '';

constructor(private removeMovieModal: NgbActiveModal) {}

  removeMovie(): void {
    this.removeMovieModal.close('true');
  }

  closeModal(): void {
    this.removeMovieModal.close();
  }
}
