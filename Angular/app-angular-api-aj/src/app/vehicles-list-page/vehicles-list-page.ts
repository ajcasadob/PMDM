import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../interface/vehicles.interface';
import { VehicleService } from '../service/vehicles.service';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-vehicles-list-page',
  imports: [RouterLink],
  templateUrl: './vehicles-list-page.html',
  styleUrl: './vehicles-list-page.css',
})
export class VehiclesListPage implements OnInit{



  vehicle: Vehicle[] = [];
  

  constructor(private VehicleService: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.VehicleService.getVehicleList().subscribe(resp=>{
      
        this.vehicle = resp.results;
        
  
    });
  }





}
