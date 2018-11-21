import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { MoveTaskEvent } from '../move-task-event';
import { TaskService } from '../task.service';

// TODO
// ✅ routing
// ~ service (CRUD)
// ~ move in service?
// fix styling
// font awesome
// bem

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

  onMoved(event: MoveTaskEvent) {
    const index1 = this.tasks.findIndex(task => task.id === event.task.id);
    const index2 = event.direction === 'up' ? index1 - 1 : index1 + 1;

    const temp = this.tasks[index1];
    this.tasks[index1] = this.tasks[index2];
    this.tasks[index2] = temp;
  }

  getTasks() {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
}
