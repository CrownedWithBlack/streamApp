import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../../../services/modals/modal.service';

@Component({
  selector: 'app-remove-movie',
  standalone: true,
  imports: [],
  templateUrl: './remove-movie.component.html',
  styleUrl: './remove-movie.component.scss'
})
export class RemoveMovieComponent {
@Input() title = '';
@Input() titleID = 0;
@Input() moviesPerSlide = 0;

constructor(private removeMovieModal: NgbActiveModal, private customModalService: ModalService) {}

  removeMovie(): void {
    this.removeMovieModal.close(true);
  }

  closeModal(): void {
    this.removeMovieModal.close();
  }
}
