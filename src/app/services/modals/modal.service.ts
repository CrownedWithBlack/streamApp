import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewMoreModalComponent } from '../../shared/components/modals/view-more-modal/view-more-modal.component';
import { RemoveMovieComponent } from '../../shared/components/modals/remove-movie/remove-movie.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private moviesPerSlide: any[][] =[];

  constructor(private modalService: NgbModal) {}

  watchModal(title: string, id: number, review: string): void {
    const modal = this.modalService.open(ViewMoreModalComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.body = review;
  }

  // hideModal(title: string, id:number, moviesPerSlide: any[][]): void {
    
  //   const modal = this.modalService.open(RemoveMovieComponent);
  //   modal.componentInstance.title = title;

  //   modal.result.then((response) => {
  //     if (response) {
  //       this.removeMovie(id, moviesPerSlide);
  //     }
  //   });
  // }
  hideModal(title: string, id:number, onConfirm: () => void): void {
    
    const modal = this.modalService.open(RemoveMovieComponent);
    modal.componentInstance.title = title;

    modal.result.then((response) => {
      if (response) {
        onConfirm();
      }
    });
  }
}
