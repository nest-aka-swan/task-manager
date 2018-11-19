import { Component, OnInit } from '@angular/core';

import { TASKS } from '../mock-tasks';
import { MoveTaskEvent } from '../move-task-event';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit {
  tasks = TASKS;

  onMoved(event: MoveTaskEvent) {
    const index1 = this.tasks.findIndex(task => task.id === event.task.id);
    const index2 = event.direction === 'up' ? index1 - 1 : index1 + 1;

    const temp = this.tasks[index1];
    this.tasks[index1] = this.tasks[index2];
    this.tasks[index2] = temp;
  }

  constructor() {}

  ngOnInit() {}
}
