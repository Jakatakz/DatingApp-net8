import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisplayQuoteComponent } from "../../../components/display-quote/display-quote.component";
import { UpdateQuoteComponent } from "../../../components/update-quote/update-quote.component";

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [NgIf, NgFor, DisplayQuoteComponent, UpdateQuoteComponent],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent
{
  isVisible = true;
  listOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

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

  toggleVisibility()
  {
    this.isVisible = !this.isVisible;
  }


}
