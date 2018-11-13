import { Component, OnInit } from '@angular/core';

import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit {
  tasks = TASKS;

  constructor() {}

  ngOnInit() {}
}
