import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'members', component: MemberListComponent},
    {path:'members/:id', component: MemberDetailComponent},
    {path:'', component: HomeComponent},
    {path:'', component: HomeComponent},
    {path:'', component: HomeComponent}
];
