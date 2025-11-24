import { Routes } from '@angular/router';
import { HomePagesPage } from './pages/home-pages-page/home-pages-page';
import { MoviePopularListComponentPage } from './pages/movie-popular-list-component-page/movie-popular-list-component-page';
import { PeoplePopularListComponentPage } from './pages/people-popular-list-component-page/people-popular-list-component-page';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        component:HomePagesPage
    },
    {
        path:'popularListMovie',
        component:MoviePopularListComponentPage
    },
    {
        path:'peoplePopularList',
        component:PeoplePopularListComponentPage
    }
];
