import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FilmComponent } from './film/film.component';

export const routes: Routes = [
    {path: 'accueil', component: AccueilComponent},
    {path: 'films', component:FilmComponent}
];
