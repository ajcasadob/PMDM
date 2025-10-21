import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  imports: [],
  templateUrl: './mensaje.html',
  styleUrl: './mensaje.css'
})
export class Mensaje {

nombre = 'Antonio';
title = 'Bievenido a Angular';
colorTexto = 'black';
luzEncendida = false;
progreso=0;


onClick() {
  this.title = 'Has hecho click en el botón'; 
  }

onClickChangeColor() {

  this.colorTexto = this.colorTexto === 'black' ? 'red' : 'black';
  
  }

getImageUrl(){


  if(this.luzEncendida){

    return `https://www.emojiall.com/images/120/samsung/one-ui-7.0-april-2025/1f4a1.png`

  }else{

    return `https://www.emojiall.com/images/240/htc/sense-7/1f4a1.png`
  }

  
  }

  onClickChangeLuz(){
    if(this.luzEncendida){
      this.luzEncendida=false
    }else{
      this.luzEncendida=true
    }

  }

  incrementar(){
    if(this.progreso<100){
      this.progreso +=10;
    }
  }

  decrementar (){
    if(this.progreso>0){
      this.progreso-=10;
    }
  }

  

}


