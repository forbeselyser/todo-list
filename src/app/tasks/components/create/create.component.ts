import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskStateService } from '../../services/state/task-state.service';

@Component({
  selector: 'task-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  taskValue: string = '';

  constructor(
    private taskStateService: TaskStateService
  ) { }

  ngOnInit(): void {
  }

  onCreateTask(text: string) {

    if(!text) {
      return;
    }

    this.taskStateService.add(new Task(text));
    this.taskValue = '';
  }
}
