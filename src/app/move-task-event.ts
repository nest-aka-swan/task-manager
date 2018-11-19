import { Task } from './task';
import { Direction } from './direction';

export type MoveTaskEvent = { task: Task; direction: Direction };
