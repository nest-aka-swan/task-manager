import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { MoveDirection } from '../move-direction';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  handleMove(task: Task, direction: MoveDirection) {
    const index1 = this.tasks.findIndex(t => t.id === task.id);
    const index2 = direction === 'up' ? index1 - 1 : index1 + 1;

    const temp = this.tasks[index1];
    this.tasks[index1] = this.tasks[index2];
    this.tasks[index2] = temp;
  }

  handleAdd(task: Task) {
    this.taskService.addTask(task).subscribe(task => this.tasks.push(task));
  }

  handleDelete(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.taskService.deleteTask(task).subscribe();
  }

  private getTasks() {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
}
