import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent {
  @Input() message!: string;

  count: number = 0;
  countB: number = 0;
  @Output() countChanged = new EventEmitter<number>();
  @Output() countChangedB = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  incrementB() {
    this.countB++;
    this.countChangedB.emit(this.countB);
  }



}
