import { ticketService } from '../ticket.service';
import { ticket } from '../ticket';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateticketComponent implements OnInit {

  ticket: ticket = new ticket();
  submitted = false;

  constructor(private ticketService: ticketService,
    private router: Router) { }

  ngOnInit() {
  }

  newTicket(): void {
    this.submitted = false;
    this.ticket = new ticket();
  }

  save() {
    console.log("ticket is", this.ticket);
    this.ticketService
    .create(this.ticket).subscribe(data => {
      this.ticket = new ticket();
      this.readAll();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
    console.log("nowwwww") 
  }

  readAll() {
    this.router.navigate(['/tickets']);
  }
}
