import { Component, OnInit } from '@angular/core';
import { ticket } from '../ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { ticketService } from '../ticket.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  id: number;
  ticket: ticket;

  constructor(private route: ActivatedRoute,private router: Router,
    private ticketService: ticketService) { }

  ngOnInit() {
    this.ticket = new ticket();

    this.id = this.route.snapshot.params['id'];
    
    this.ticketService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.ticket = data;
      }, error => console.log(error));
  }

  update() {
    this.ticketService.update(this.id, this.ticket)
      .subscribe(data => {
        console.log(data);
        this.ticket = new ticket();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/tickets']);
  }
}
