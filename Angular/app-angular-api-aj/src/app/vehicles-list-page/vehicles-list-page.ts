import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../interface/vehicles.interface';
import { VehicleService } from '../service/vehicles.service';

@Component({
  selector: 'app-vehicles-list-page',
  imports: [],
  templateUrl: './vehicles-list-page.html',
  styleUrl: './vehicles-list-page.css',
})
export class VehiclesListPage implements OnInit{



  vehicle: Vehicle[] = [];
  loading = true;

  constructor(private VehicleService: VehicleService) {}

  ngOnInit(): void {
    this.VehicleService.getVehicleList().subscribe({
      next: (response) => {
        this.vehicle = response.results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los vehiculos', err);
        this.loading = false;
      }
    });
  }




}
