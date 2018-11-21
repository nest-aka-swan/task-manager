import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { TASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    return { tasks: TASKS };
  }

  genId() {
    return uuid();
  }
}
