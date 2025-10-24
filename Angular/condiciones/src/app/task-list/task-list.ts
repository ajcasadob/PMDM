import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  tasks = [
  { title: 'Hacer la compra', done: false },
  { title: 'Estudiar Angular', done: true },
  { title: 'Pasear al perro', done: false }
];

cambiarEstado(index: number) {

  this.tasks[index].done = !this.tasks[index].done;
  
 

}

}
