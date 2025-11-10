import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form-page.html',
  styleUrl: './register-form-page.css',
})
export class RegisterFormPage {


  registerFormGroup = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    nif: new FormControl('',[Validators.required, Validators.pattern (/^[0-9]{8}[A-Za-z]$/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    telefono: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    sexo: new FormControl('', Validators.required),
    conocido: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
    terminos: new FormControl(false, Validators.requiredTrue)
  });


  onLoginClicked(){

    console.log('**Form Control inputs**');
    console.log('Nombre:', this.registerFormGroup.get('nombre')?.value);
    console.log('Apellidos:', this.registerFormGroup.get('apellidos')?.value);
    console.log('NIF:', this.registerFormGroup.get('nif')?.value);
    console.log('Email:', this.registerFormGroup.get('email')?.value);
    console.log('Teléfono:', this.registerFormGroup.get('telefono')?.value);
    console.log('Sexo:', this.registerFormGroup.get('sexo')?.value);
    console.log('Conocido:', this.registerFormGroup.get('conocido')?.value);
    console.log('Password:', this.registerFormGroup.get('password')?.value);
    console.log('Confirm Password:', this.registerFormGroup.get('confirmPassword')?.value);
    console.log('Términos:', this.registerFormGroup.get('terminos')?.value);

    console.log('**Form group value**');
    console.log('Form Value:', this.registerFormGroup.value);
  }


  clearForm(){
    this.registerFormGroup.reset();

  }

}
