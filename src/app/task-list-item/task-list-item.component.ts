import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';
import { MoveDirection } from '../move-direction';

/*
- добавить новую задачу
- отредактировать задачу
- передвинуть задачу по списку
- закрыть задачу
- посмотреть задачу
*/

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent implements OnInit {
  @Input() task: Task;
  @Input() first: boolean;
  @Input() last: boolean;
  @Output() move = new EventEmitter<MoveDirection>();
  @Output() delete = new EventEmitter();
  expanded = false;

  onExpand() {
    this.expanded = !this.expanded;
  }

  handleMove(direction: MoveDirection) {
    this.move.emit(direction);
  }

  handleDelete() {
    this.delete.emit();
  }

  getCssClasses() {
    return {
      coming: this.isDeadlineComing(),
      passed: this.isDeadlinePassed(),
    };
  }

  isDeadlineComing() {
    const now = new Date();
    const deadline = new Date(this.task.deadline);
    const delta = deadline.getTime() - now.getTime();

    return delta > 0 && delta < THREE_DAYS_IN_MILLISECONDS;
  }

  isDeadlinePassed() {
    const now = new Date();
    const deadline = new Date(this.task.deadline);

    return now.getTime() > deadline.getTime();
  }

  constructor() {}

  ngOnInit() {}
}

const THREE_DAYS_IN_MILLISECONDS = 259200000;
