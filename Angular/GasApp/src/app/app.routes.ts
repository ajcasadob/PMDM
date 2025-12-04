import { Routes } from '@angular/router';
import { ProvinciaListPage } from './pages/provincia-list-page/provincia-list-page';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'provincias'
    },
    {
        path:'provincias',
        component: ProvinciaListPage
    }
];
