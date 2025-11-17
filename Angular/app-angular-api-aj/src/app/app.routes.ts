import { Routes } from '@angular/router';
import { VehiclesListPage } from './vehicles-list-page/vehicles-list-page';
import { VehiclesDetailPage } from './vehicles-detail-page/vehicles-detail-page';

export const routes: Routes = [
    {path: '',
    component: VehiclesListPage
    }
    ,
    {
        path:'detallesVehiculos/:id',
        component: VehiclesDetailPage
    }
];
