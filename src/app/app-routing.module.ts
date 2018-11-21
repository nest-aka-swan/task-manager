import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskManagerComponent },
  { path: 'task/:id', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
