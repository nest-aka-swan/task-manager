import { Component, OnInit } from '@angular/core';

import { TASKS } from './shared/mock-tasks';
import { Direction } from '../task/shared/direction';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit {
  tasks = TASKS;

  onMoved({ task: Task, direction: Direction }) {
    // if task index is 0 then return
    // if task index is length - 1 then return
    this.tasks.findIndex();
  }

  constructor() {}

  ngOnInit() {}
}
