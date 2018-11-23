import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { AppMaterialModule } from './app-material.module';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [AppComponent, TaskManagerComponent, TaskListItemComponent, TaskFormComponent, EditTaskComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
