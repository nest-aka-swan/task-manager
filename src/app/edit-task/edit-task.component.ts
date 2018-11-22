import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  task: Task;

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => (this.task = task));
  }

  handleSubmit(task: Task) {
    this.taskService.updateTask(task).subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
