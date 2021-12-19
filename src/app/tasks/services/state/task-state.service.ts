import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { addTask, loadTasks, removeTask, updateTask } from './tasks.actions';
import { selectTasks } from './tasks.selector';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {

  constructor(private store: Store) { }

  add(task: Task) {
    this.store.dispatch(addTask({ task }));
  }

  remove(task: Task) {
    this.store.dispatch(removeTask({ task }));
  }

  update(task: Task) {
    this.store.dispatch(updateTask({ task }))
  }

  load(tasks: Task[]) {
    this.store.dispatch(loadTasks({ tasks }));
  }

  getTasks(): Observable<Task[]> {
    return this.store.select(selectTasks);
  }
}
