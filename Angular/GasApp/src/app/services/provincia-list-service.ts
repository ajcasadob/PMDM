import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia, ProvinciaResponse } from '../interfaces/provincia-list.interface';

@Injectable({
  providedIn: 'root',
})
export class ProvinciaListService {



constructor(private http:HttpClient){}


getProvincias():Observable<ProvinciaResponse>{
  return this.http.get<ProvinciaResponse>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/')
}





}
