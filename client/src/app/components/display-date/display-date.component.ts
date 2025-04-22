import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-date.component.html',
  styleUrl: './display-date.component.css'
})
export class DisplayDateComponent {
  today: Date = new Date();
  isVisible: boolean = false;

  toggleVisibility()
  {
    this.isVisible = !this.isVisible;
  }
}
