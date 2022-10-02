import { Component } from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  newTask: string;
  tasks: Task[] = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  constructor() {}

  addTask(){
    this.tasks.push({
      id: this.newTask.length + 1,
      title: this.newTask,
      done: false
    });
    this.newTask = '';
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  toggleDone(id: number){
    this.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
