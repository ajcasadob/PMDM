import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstacionMunicipioMap, mapEstacionMunicipio } from '../interfaces/estacion-municipio-mapeado.interface';
import { EstacionesMunicipioResponse, EstacionMunicipio } from '../interfaces/estacion-municipio.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstacionMunicipioList {

  constructor(private http: HttpClient){}

  private mapperEstacion(e: EstacionMunicipio): EstacionMunicipioMap{
    return mapEstacionMunicipio(e);

  }


  getEstacionesMunicipio(IdMunicipio: number):Observable<EstacionMunicipioMap[]>{

    return this.http
    .get<EstacionesMunicipioResponse>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${IdMunicipio}`)
    .pipe(map(resp=> resp.ListaEESSPrecio.map(e => this.mapperEstacion(e))))
  }
  
}
