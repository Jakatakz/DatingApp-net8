import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';
import { ParentAComponent } from './ngtesting/decorators/parent-a/parent-a.component';
import { ChildAComponent } from './ngtesting/decorators/child-a/child-a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NavComponent, HomeComponent, ParentAComponent, ChildAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private accountService = inject(AccountService);

  ngOnInit(): void {
      this.setCurrentUser();
    }

    setCurrentUser() {
      const userString = localStorage.getItem('user');
      if(!userString) return;
      const user = JSON.parse(userString);
      this.accountService.currentUser.set(user);
    }
  }
