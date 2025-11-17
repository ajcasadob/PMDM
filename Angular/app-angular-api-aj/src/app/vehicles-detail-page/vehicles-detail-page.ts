import { Component, OnInit } from '@angular/core';
import { VehicleDetail } from '../interface/vehicleDetails.interface';
import { VehicleService } from '../service/vehicles.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicles-detail-page',
  imports: [RouterLink],
  templateUrl: './vehicles-detail-page.html',
  styleUrl: './vehicles-detail-page.css',
})
export class VehiclesDetailPage implements OnInit {



vehicle ? : VehicleDetail;

constructor (

  private service: VehicleService,
  private route : ActivatedRoute
){}

ngOnInit(): void {
  
  const id = this.route.snapshot.paramMap.get('id')
  if ( id ){
    this.service.getVehicle(+id).subscribe((resp)=>{
    this.vehicle =resp
    })
  }
}

}
