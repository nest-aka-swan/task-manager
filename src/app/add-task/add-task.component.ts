import { Component, Output, EventEmitter } from '@angular/core';

import { FormTask } from '../form-task';

// FIXME date picker
// FIXME proper validation

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() add = new EventEmitter<FormTask>();

  handleAdd(task) {
    this.add.emit(task);
  }
}
