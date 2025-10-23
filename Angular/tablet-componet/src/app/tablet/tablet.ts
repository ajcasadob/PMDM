import { Component } from '@angular/core';



type Alumnos = {
  nombre: string;
  apellidos: string;   
  edad: number;
  curso: string;
  sexo: string; 
};

@Component({
  selector: 'app-tablet',
  imports: [],
  templateUrl: './tablet.html',
  styleUrl: './tablet.css',
})

export class Tablet {


   alumnos: Alumnos[] = [
  {nombre: "Antonio", apellidos: "Casado", edad: 30, curso:"2ºDAM", sexo: "hombre"},
  {nombre: "German", apellidos: "Pastor", edad: 20, curso:"2ºDAM", sexo: "hombre"},
  {nombre: "Julieta", apellidos: "Perez", edad: 25, curso:"2ºDAM", sexo: "mujer"},
];


  

}
