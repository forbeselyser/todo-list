import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from "./tasks-routing.module";
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './services/state/tasks.reducer';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { FilterTasksPipe } from './pipes/filter-tasks.pipe';

@NgModule({
  declarations: [
    CreateComponent,
    TasksComponent,
    TaskListComponent,
    FilterTasksPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    StoreModule.forFeature('tasks', tasksReducer )
  ],
})
export class TasksModule { }
