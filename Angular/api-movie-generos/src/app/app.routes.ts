import { Routes } from '@angular/router';
import { MovieListPage } from './pages/movie-list-page/movie-list-page';
import { PeopleListPage } from './pages/people-list-page/people-list-page';
import { DetailsPeopleListPage } from './pages/details-people-list-page/details-people-list-page';
import { DetailsMovieListPage } from './pages/details-movie-list-page/details-movie-list-page';
import { MovieDiscoverPage } from './pages/movie-discover-page/movie-discover-page';

export const routes: Routes = [
     {
            path:'',
            component: MovieListPage,
            pathMatch: 'full'
        },
        {
            path: 'personajes',
            component:PeopleListPage
        },
        {
            path:'personajes/:id',
            component:DetailsPeopleListPage
        },
        {
            path:'popular/:id',
            component:DetailsMovieListPage
        },
        {
            path:'tv_movies',
            component:MovieDiscoverPage
        }
];
