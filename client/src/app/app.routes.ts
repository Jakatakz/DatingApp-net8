import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_gaurds/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', // because this is an empty string, your routes didnt change from before you put them here.
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard], // all the children below will have the authGuard route.
        children: [
            { path: 'members', component: MemberListComponent }, // canActivate: [authGuard]}, // canActivate = you can activate (navigate to) this route only if authGaurd returns true
            {path:'members/:id', component: MemberDetailComponent},
            {path:'lists', component: ListsComponent},
            {path:'messages', component: MessagesComponent},
        ] 
    },
    { path: 'errors', component: TestErrorsComponent },
    {path:'**', component: HomeComponent, pathMatch: 'full'}
];
