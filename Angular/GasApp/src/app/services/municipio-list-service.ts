import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MunicipioResponse } from '../interfaces/municipio-list.interface';

@Injectable({
  providedIn: 'root',
})
export class MunicipioListService {
  
constructor(private http: HttpClient){}

getMunicipios(IDPovincia: number):Observable<MunicipioResponse>{
  return this.http.get<MunicipioResponse>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${IDPovincia}`)
}

}
