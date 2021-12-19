import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from "./tasks-routing.module";


@NgModule({
  declarations: [
    CreateComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
  ]
})
export class TasksModule { }
