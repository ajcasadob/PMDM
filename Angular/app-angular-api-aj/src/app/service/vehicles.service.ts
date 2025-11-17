import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiclesResponse } from '../interface/vehicles.interface';





@Injectable({
    providedIn: 'root',
})
export class VehicleService {

    private apiUrl = 'https://swapi.dev/api/vehicles/';

    constructor(private http: HttpClient) { }

    getVehicleList(): Observable<VehiclesResponse> {
        return this.http.get<VehiclesResponse>(this.apiUrl);
    }

}
