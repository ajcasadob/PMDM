import { Injectable } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiclesResponse } from '../interface/vehicles.interface';
import { VehicleDetail } from '../interface/vehicleDetails.interface';





@Injectable({
    providedIn: 'root',
})
export class VehicleService {

    private apiUrl = 'https://swapi.dev/api/vehicles/';

    constructor(private http: HttpClient) { }

    getVehicleList(): Observable<VehiclesResponse> {
        return this.http.get<VehiclesResponse>(this.apiUrl);
    }

    getVehicle(id: number): Observable<VehicleDetail> {

        return this.http.get<VehicleDetail>(`https://swapi.dev/api/vehicles/id/${id}`);
    }

}
