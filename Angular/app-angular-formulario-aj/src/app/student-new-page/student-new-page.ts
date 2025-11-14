import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-new-page',
  imports: [ReactiveFormsModule],
  templateUrl: './student-new-page.html',
  styleUrl: './student-new-page.css',
})
export class StudentNewPage {

 



  profileForm = new FormGroup({

    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    numeroAlumnos: new FormControl(),
    edad : new FormControl(),
    nif: new FormControl (),
    cursoMatriculado: new FormControl ()

  }

  )
registerFormGroup = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    nif: new FormControl('',[Validators.required, Validators.pattern (/^[0-9]{8}[A-Za-z]$/)]),
    cursoMatriculado: new FormControl('',Validators.required)


  });

 onLoginClicked(){

    console.log('**Form Control inputs**');
    console.log('Nombre:',this.profileForm .get('nombre')?.value);
    console.log('Apellidos:', this.profileForm.get('apellidos')?.value);
    console.log('NIF:',this.profileForm .get('nif')?.value);
    console.log('numeroAlumnos:',this.profileForm .get('numeroAlumnos')?.value);
    console.log('cursoMatriculado',this.profileForm .get('cursoMatriculado')?.value);
    
   
    
    

    console.log('**Form group value**');
    console.log('Form Value:', this.profileForm.value);
  }

}
