import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Input() model = this.initModel();
  @Output() add = new EventEmitter<Task>();

  handleAdd(taskForm: NgForm) {
    this.add.emit(this.model);
    this.model = this.initModel();
    taskForm.resetForm();
  }

  initModel() {
    return new Task('', '', '');
  }
}
