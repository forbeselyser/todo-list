import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskStateService } from '../../services/state/task-state.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: ReadonlyArray<Task> = [];

  constructor(
    private taskStateService: TaskStateService
  ) { }

  ngOnInit(): void {
  }

  onRemoveTask(task: Task) {
    this.taskStateService.remove(task);
  }

}
