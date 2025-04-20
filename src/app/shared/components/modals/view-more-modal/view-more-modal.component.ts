import { Component, Input } from '@angular/core';
import {NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  watchMovie(): void {
    alert("Proximamente!");
  }

  closeModal(): void {
    this.watchMovieModal.dismiss();
  }
}
