import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Observable, pluck } from 'rxjs';
import { Task } from './models/task.model';
import { TaskStateService } from "./services/state/task-state.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Task[]> = this.taskStateService.getTasks();
  filter$: Observable<string>;

  constructor(
    private taskService: TaskService,
    private taskStateService: TaskStateService,
    public route: ActivatedRoute,
  ) { 
    this.filter$ = route.params.pipe(pluck('filter'));
  }

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe((tasks) => this.taskStateService.load(tasks));
  }

}
