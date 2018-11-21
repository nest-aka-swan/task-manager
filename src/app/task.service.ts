import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
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
    return this.http.get<Task[]>(this.tasksUrl).pipe(catchError(this.handleError));
  }

  getTask(id: string) {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(catchError(this.handleError));
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(catchError(this.handleError));
  }

  deleteTask(task: Task) {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.delete(url, httpOptions).pipe(catchError(this.handleError));
  }

  updateTask(task: Task) {
    return this.http.put(this.tasksUrl, task, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(e) {
    return throwError(e);
  }
}
