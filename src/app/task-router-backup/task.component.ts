import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  task: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private location: Location) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => (this.task = task));
  }

  handleSave() {
    this.taskService.updateTask(this.task).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
