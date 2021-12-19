import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
    .select<any>((state: any) => state) // the complete state this time!!!
    .subscribe((completeState: any) => console.log(completeState));
  }
}
