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

//esta función se dispara por medio del evento (click) en el template, si el usuario confirma que desea eliminar
//la pelicula devuelve un true, este valor lo espera el modal.service.ts para eejcutar la logica de eliminación
  removeMovie(): void {
    this.removeMovieModal.close(true);
  }

  //cierra el modal
  closeModal(): void {
    this.removeMovieModal.close();
  }
}
