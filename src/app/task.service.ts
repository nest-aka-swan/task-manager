import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from './task';
import { TASKS } from './mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksUrl = 'api/tasks';
  tasks = TASKS;

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.tasksUrl).pipe(catchError(this.handleError<Task[]>('getTasks', [])));
  }

  getTask(id: string) {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError<Task>(`getTask id=${id}`)));
    // return of(this.tasks.find(task => task.id === id));
  }

  addTask(task: Task) {
    return this.http.post(this.tasksUrl, task, httpOptions).pipe(catchError(this.handleError<Task>('addTask')));
  }

  deleteTask(task: Task) {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.delete(url, httpOptions).pipe(catchError(this.handleError<Task>('deleteTask')));
    // this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  updateTask(task: Task) {
    this.http.put(this.tasksUrl, task, httpOptions).pipe(catchError(this.handleError<any>('updateTask')));
    // this.tasks = this.tasks.map(t => (t.id === task.id ? task : t));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
