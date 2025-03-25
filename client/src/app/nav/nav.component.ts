import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent
{
  accountService = inject(AccountService); // our template is not in the same class, it's considered a child class of our nav component. So we changed this from private to non private.
  model: any = {};

  login()
  {
    this.accountService.login(this.model).subscribe({
      next: response =>
      {
        console.log(response);
      },
      error: error => console.log(error)
    })
    //console.log(this.model);
  }

  logout()
  {
    this.accountService.logout();
  }
}
