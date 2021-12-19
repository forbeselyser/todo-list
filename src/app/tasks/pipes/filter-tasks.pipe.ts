import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'filterTasks',
  pure: true
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: Task[], filter: string): Task[] {
    if (!tasks || !filter) {
      return tasks;
    }

    switch (filter) {
      case 'active':
        return tasks.filter((task: Task) => {
          return !task.completed;
        });

      case 'completed':
        return tasks.filter((task: Task) => {
          return task.completed;
        });

      default: 
        return tasks;
    }
  }

}
