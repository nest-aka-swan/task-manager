import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task-manager/shared/task.model';
import { Direction } from './shared/direction';

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
  @Output() move = new EventEmitter<{ task: Task; direction: Direction }>();
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
