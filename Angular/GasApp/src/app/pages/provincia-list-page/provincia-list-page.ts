import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../interfaces/provincia-list.interface';
import { ProvinciaListService } from '../../services/provincia-list-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipioListService } from '../../services/municipio-list-service';
import { Municipio } from '../../interfaces/municipio-list.interface';
import { EstacionMunicipioMap } from '../../interfaces/estacion-municipio-mapeado.interface';
import { EstacionMunicipioList } from '../../services/estacion-municipio-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-provincia-list-page',
  imports: [FormsModule],
  templateUrl: './provincia-list-page.html',
  styleUrl: './provincia-list-page.css',
})
export class ProvinciaListPage implements OnInit {


  ProvinciaList : Provincia []=[]
  MunicipioList : Municipio [] = []
  ListEstaciones: EstacionMunicipioMap[]=[]
  idProvincia! :number;
  idEstacionMunicipio! : number;

  constructor(private provinciaList: ProvinciaListService, private route: ActivatedRoute, private municipioList: MunicipioListService, private serviceEstacionMuni: EstacionMunicipioList){}

  getProvincia(): void {

    this.provinciaList.getProvincias().subscribe(resp=>{
      this.ProvinciaList = resp;
    })

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.municipioList.getMunicipios(id);
    }
    this.getProvincia();
  }

  getMunicipios(): void{

    this.municipioList.getMunicipios(this.idProvincia).subscribe(resp=>{
      this.MunicipioList= resp;
    })
  }

  getEstacionMunicipio(): void {

    this.serviceEstacionMuni.getEstacionesMunicipio(this.idEstacionMunicipio).subscribe(resp=>{
      this.ListEstaciones=resp
    })

  }


}
