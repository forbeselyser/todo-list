import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskStateService } from '../../services/state/task-state.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() filter!: string;
  @Input() tasks: Task[] = [];

  constructor(
    private taskStateService: TaskStateService
  ) { }

  ngOnInit(): void {
  }

  onRemoveTask(task: Task) {
    this.taskStateService.remove(task);
  }

  onCheckboxChange(e: any, task: Task) {
    const checked = e.target.checked;
    
    const updatedTask: Task = Object.assign({}, task, { completed: checked });

    this.taskStateService.update(updatedTask);
  }

}
