import { Component, Input } from '@angular/core';
import {NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-more-modal',
  standalone: true,
  imports: [],
  templateUrl: './view-more-modal.component.html',
  styleUrl: './view-more-modal.component.scss'
})
export class ViewMoreModalComponent {
  @Input() title = '';
  @Input() body = '';

  constructor(private watchMovieModal:NgbActiveModal ) {}

//esta función se dispara por medio del evento (click) en el template, muestra un placeholder
  watchMovie(): void {
    alert("Proximamente!");
  }

  //esta función se dispara por medio del evento (click) en el template, cierra el modal
  closeModal(): void {
    this.watchMovieModal.dismiss();
  }
}
