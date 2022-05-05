import { ticketDetailsComponent } from 'src/app/ticket-details/ticket-details.component';
import { CreateticketComponent } from './create-ticket/create-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ticketListComponent } from 'src/app/ticket-list/ticket-list.component';
import { UpdateTicketComponent } from 'src/app/update-ticket/update-ticket.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './security/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'ticket', pathMatch: 'full' },
  { path: 'tickets', component: ticketListComponent },
  { path: 'add', component: CreateticketComponent },
  { path: 'update/:id', component: UpdateTicketComponent },
  { path: 'details/:id', component:ticketDetailsComponent },

  {
    path:'register-form',
    component:RegistrationFormComponent
  },
  {
    path:'login',
    component:LoginFormComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
