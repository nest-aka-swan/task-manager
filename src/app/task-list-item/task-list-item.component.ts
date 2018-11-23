import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { MoveDirection } from '../move-direction';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() task: Task;
  @Input() first: boolean;
  @Input() last: boolean;
  @Output() move = new EventEmitter<MoveDirection>();
  @Output() delete = new EventEmitter();

  handleMove(direction: MoveDirection) {
    this.move.emit(direction);
  }

  handleDelete() {
    this.delete.emit();
  }

  getCssClasses() {
    return {
      'task-list-item_deadline-coming': this.isDeadlineComing(),
      'task-list-item_deadline-passed': this.isDeadlinePassed(),
    };
  }

  private isDeadlineComing() {
    const now = new Date();
    const deadline = new Date(this.task.deadline);
    const delta = deadline.getTime() - now.getTime();

    return delta > 0 && delta < THREE_DAYS_IN_MILLISECONDS;
  }

  private isDeadlinePassed() {
    const now = new Date();
    const deadline = new Date(this.task.deadline);

    return now.getTime() > deadline.getTime();
  }
}

const THREE_DAYS_IN_MILLISECONDS = 259200000;
