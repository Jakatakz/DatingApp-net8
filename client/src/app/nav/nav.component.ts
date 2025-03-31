import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent
{
  accountService = inject(AccountService); // our template is not in the same class, it's considered a child class of our nav component. So we changed this from private to non private.
  private router = inject(Router);
  private toastr = inject(ToastrService);
  model: any = {};
  navbarColor: string = 'blue';

  updateNavBarColor()
  {
    if (this.accountService.currentUser())
    {
      this.navbarColor = 'green';
    }
    else
    {
      this.navbarColor = 'bg-primary';
    }
  }

  login()
  {
    this.accountService.login(this.model).subscribe({
      next: _ =>
      {
        this.router.navigateByUrl('/members');
        this.updateNavBarColor();
      },
      error: error => this.toastr.error(error.error)
    })
    //console.log(this.model);
  }

  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.updateNavBarColor();
  }
}
