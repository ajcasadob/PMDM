import { Component } from '@angular/core';

type Alumnos = {
  numeroAlumno: number;
  nombre: string;
  apellidos: string; 
  nif: string;  
  edad: number;
  curso: string;
  sexo: string; 
};


@Component({
  selector: 'app-student-list-page',
  imports: [],
  templateUrl: './student-list-page.html',
  styleUrl: './student-list-page.css',
})
export class StudentListPage {

  alumnos: Alumnos []= [
    { numeroAlumno: 1, nombre: 'Juan', apellidos: 'Pérez García', nif: '12345678A', edad: 20, curso: 'Matemáticas', sexo: 'Masculino' },
    { numeroAlumno: 2, nombre: 'María', apellidos: 'López Fernández', nif: '87654321B', edad: 22, curso: 'Física', sexo: 'Femenino' },
    { numeroAlumno: 3, nombre: 'Carlos', apellidos: 'Sánchez Martínez', nif: '11223344C', edad: 21, curso: 'Química', sexo: 'Masculino' },
    { numeroAlumno: 4, nombre: 'Ana', apellidos: 'Gómez Rodríguez', nif: '44332211D', edad: 23, curso: 'Biología', sexo: 'Femenino' },
    { numeroAlumno: 5, nombre: 'Luis', apellidos: 'Hernández López', nif: '55667788E', edad: 20, curso: 'Historia', sexo: 'Masculino' }
    
  ];

  verDetalle(nombre: string) {
    alert(`Se ha pulsado en el alumno ${nombre}`);
  }
}
