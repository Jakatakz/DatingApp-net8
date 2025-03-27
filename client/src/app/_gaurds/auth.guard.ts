import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// route represents the route the user is trying to access, route.url, route.params, route.data
// state represents the entire router state at the moment, state.url
export const authGuard: CanActivateFn = (route, state) => { // CanActivateFn will determine whether a route can be activated or not.
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  console.log("attempted route: ", route.url);
  console.log("full navigation url: ", state.url);

  if (accountService.currentUser())
  {
    return true;
  }
  else
  {
    toastr.error("unauthorized access, blocked to ${state.url}");
    return false;
  }
};
