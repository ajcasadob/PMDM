import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../interfaces/provincia-list.interface';
import { ProvinciaListService } from '../../services/provincia-list-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provincia-list-page',
  imports: [],
  templateUrl: './provincia-list-page.html',
  styleUrl: './provincia-list-page.css',
})
export class ProvinciaListPage implements OnInit {


  ProvinciaList : Provincia []=[]

  constructor(private provinciaList: ProvinciaListService, private router: Router){}

  ngOnInit(): void {

    this.provinciaList.getProvincias().subscribe(resp=>{
      this.ProvinciaList = resp;
    })
  }

}
