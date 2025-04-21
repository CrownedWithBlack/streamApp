import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewMoreModalComponent } from '../../shared/components/modals/view-more-modal/view-more-modal.component';
import { RemoveMovieComponent } from '../../shared/components/modals/remove-movie/remove-movie.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  //mostramos el componente compartido: ViewMoreModalComponent por medio del modalService, también se asignan algunos valores
  watchModal(title: string, id: number, review: string): void {
    const modal = this.modalService.open(ViewMoreModalComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.body = review;
  }

  //esta es la función callback que se llama en los componentes principales, lo que hace es esperar por la respuesta del modal
  //espera un boolean desde su componente modal, si es true se ejecuta la lógica del callback, de lo contrario solo lo cierra
  hideModal(title: string, id:number, onConfirm: () => void): void {
    const modal = this.modalService.open(RemoveMovieComponent);
    modal.componentInstance.title = title;

    modal.result.then((response) => {
      if (response) {
        onConfirm();
      }
      else {
        modal.close();
      }
    });
  }
}
