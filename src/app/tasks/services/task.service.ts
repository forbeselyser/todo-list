import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.http
      .get<Task[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((tasks) => tasks.slice(0, 10) || []));
  }
}
