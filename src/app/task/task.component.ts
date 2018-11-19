import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';
import { Direction } from '../direction';
import { MoveTaskEvent } from '../move-task-event';

/*
- добавить новую задачу
- отредактировать задачу
- передвинуть задачу по списку
- закрыть задачу
- посмотреть задачу
*/

// TODO https://www.npmjs.com/package/uuid

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() first: boolean;
  @Input() last: boolean;
  @Output() move = new EventEmitter<MoveTaskEvent>();
  expanded = false;

  onExpand() {
    this.expanded = !this.expanded;
  }

  onMove(direction: Direction) {
    this.move.emit({ task: this.task, direction });
  }

  constructor() {}

  ngOnInit() {}
}
