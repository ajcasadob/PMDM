import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-calculo',
  imports: [CommonModule],
  templateUrl: './calculo.html',
  styleUrl: './calculo.css',
})
export class Calculo {


   num1 = 0;
   num2 = 0;
   result =0;
   operator = '';
   pulsado = false;
   actualCalc='';

   solveProblem(){
  
  if(this.operator == '+'){

    this.suma();
      return this.result;

  }
  if(this.operator == '-'){

    this.resta();
      return this.result;

  }
  if(this.operator == '*'){

    this.multiplicacion();
      return this.result;

  }
  if(this.operator == '/'){

    this.division();
      return this.result;

  }

  return 0;

}

clearAll(){
  this.num1 = 0;
  this.num2 = 0;
  this.result = 0;
  this.operator = '';
  this.actualCalc = '';
}

asignNumber(number: number){

  if(this.operator == ''){
    this.num1 = parseInt(this.num1.toString() + number.toString());
    this.actualCalc += number.toString();
  }else{
    this.num2 = parseInt(this.num2.toString() + number.toString());
    this.actualCalc += number.toString();
  }
  
}

selectOperator(ope: string){

  this.operator = ope;
  this.actualCalc += this.operator;

}

suma(){

  this.result = this.num1 + this.num2;
  return this.result;

}

resta(){

  this.result = this.num1 - this.num2;
  return this.result;

}

multiplicacion(){

  this.result = this.num1 * this.num2;
  return this.result;

}

division(){

  this.result = this.num1 / this.num2;
  return this.result;

}






}
