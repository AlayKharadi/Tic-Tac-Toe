import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button 
    [ngStyle]="{ 'background-color' : (inputValue === 'X') ? 'rgb(208, 158, 255)' : 'rgb(148, 211, 54)' }"
    >
      {{ inputValue }}
    </button>
  `,
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input()
  inputValue!: 'X' | 'O';
}
