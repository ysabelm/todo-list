import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]="title">
    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
    <p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = 'My First Todo Title';

  constructor() {}

  ngOnInit() {
  }
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
