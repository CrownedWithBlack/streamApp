import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoadDataService } from '../../services/json/load-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  imgLogoUrl: string = "assets/images/webp/movieReel.webp";
  imgUserUrl: string = "assets/images/webp/username.webp";
  imgPassUrl: string = "assets/images/webp/password.webp";

  constructor(private loadData: LoadDataService) {}

}
