import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

nombre='Antonio';
apellidos= 'casado bayon'
email= 'casado.baant24@triana.salesianos.edu'
edad= 30


resetear(){
  this.nombre = '';
  this.apellidos= '';
  this.email= '',
  this.edad=0;
}





}
