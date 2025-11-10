import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form-page.html',
  styleUrl: './register-form-page.css',
})
export class RegisterFormPage {

  loginFormGroup = new FormGroup ({
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
  });


  onLoginClicked(){

    console.log('**Form Control inputs');
    console.log('Email:',this.loginFormGroup.get('emailFormControl')?.value)
    console.log('Password: ',this.loginFormGroup.get('passwordFormControl')?.value);

    console.log('** Form group value **');
    console.log('Form Value: ',this.loginFormGroup.value);
  }


  clearForm(){
    this.loginFormGroup.reset();
  }

}
