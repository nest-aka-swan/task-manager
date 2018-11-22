import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() model = this.initModel();
  @Output() submit = new EventEmitter<Task>();

  handleSubmit() {
    this.submit.emit(this.model);
    this.model = this.initModel();
  }

  initModel() {
    return new Task('', '', '');
  }
}
