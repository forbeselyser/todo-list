import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import { TaskStateService } from "./services/state/task-state.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Task[]> = this.taskStateService.getTasks();

  constructor(
    private taskService: TaskService,
    private taskStateService: TaskStateService,
  ) { }

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe((tasks) => this.taskStateService.load(tasks));
  }

}
