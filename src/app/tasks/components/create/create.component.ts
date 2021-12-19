import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  taskValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateTask(text: string) {

  }
}
