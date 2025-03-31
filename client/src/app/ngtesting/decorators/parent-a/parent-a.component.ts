import { Component } from '@angular/core';
import { ChildAComponent } from '../child-a/child-a.component';

@Component({
  selector: 'app-parent-a',
  standalone: true,
  imports: [ChildAComponent],
  templateUrl: './parent-a.component.html',
  styleUrl: './parent-a.component.css'
})
export class ParentAComponent {
  parentMessage = "Hello from Parent Component";
  childCount = 0;
  childCountB = 0;

  handleCountChanged(newCount: number) {
    this.childCount = newCount;
  }
}
