import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateticketComponent } from './create-ticket/create-ticket.component';
import { ticketDetailsComponent } from './ticket-details/ticket-details.component';
import { ticketListComponent } from './ticket-list/ticket-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateticketComponent,
    ticketDetailsComponent,
    ticketListComponent,
    UpdateTicketComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
