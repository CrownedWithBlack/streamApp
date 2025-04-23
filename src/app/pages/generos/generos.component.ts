import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadDataService } from '../../services/json/load-data.service';
import { Movie } from '../../interfaces/movie.interface';
import { ModalService } from '../../services/modals/modal.service';
import { GenericCardContentComponent } from "../../shared/components/generic-card-content/generic-card-content.component";

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [GenericCardContentComponent],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.scss'
})

export class GenerosComponent {

}
