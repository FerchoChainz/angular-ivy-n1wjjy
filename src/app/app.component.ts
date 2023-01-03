import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  tasks: string[] = [
    'Estudiar dos horas',
    'Beber todo diciembre',
    'Ir por lobas',
  ];
  newTask = '';

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
