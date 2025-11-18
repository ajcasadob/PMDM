import { Routes } from '@angular/router';
import { PopularMoviePage } from './pages/popular-movie-page/popular-movie-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listaPopulares',
        pathMatch:'full'
    },
    {
        path:'listaPopulares',
        component:PopularMoviePage
    }
];
