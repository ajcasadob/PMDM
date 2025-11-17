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
  loading = true;

  constructor(private VehicleService: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.VehicleService.getVehicleList().subscribe({
      next: (response) => {
        this.vehicle = response.results;
        this.loading = false;
      }
    });
  }
verDetalles(vehicle: Vehicle) {
    const id = vehicle.url.split('/').filter(Boolean).pop(); 
    this.router.navigate(['/people', id]);
  }





}
