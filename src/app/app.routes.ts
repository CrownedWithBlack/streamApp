import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeliculasComponent} from './pages/peliculas/peliculas.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ConfigComponent } from './pages/config/config.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        children: [
        { path: 'series', component: SeriesComponent },
        { path: 'peliculas', component: PeliculasComponent },
        { path: 'favoritos', component: FavoritosComponent },
        { path: 'generos', component: GenerosComponent },
        { path: 'configuracion', component: ConfigComponent }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
    ];
