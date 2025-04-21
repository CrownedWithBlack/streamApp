import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';


export const routes: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', redirectTo: 'catalogo', pathMatch: 'full'},
            { path: 'catalogo', component: CatalogoComponent},
            { path: 'series', loadComponent: () => import('./pages/series/series.component').then((c) => c.SeriesComponent) },
            { path: 'peliculas', loadComponent: () => import('./pages/peliculas/peliculas.component').then((c) => c.PeliculasComponent) },
            { path: 'favoritos', loadComponent: () => import('./pages/favoritos/favoritos.component').then((c) => c.FavoritosComponent) },
            { path: 'generos', loadComponent: () => import('./pages/generos/generos.component').then((c) => c.GenerosComponent)},
            { path: 'configuracion', loadComponent: () => import('./pages/config/config.component').then((c) => c.ConfigComponent)}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'home/catalogo'},
    ];
