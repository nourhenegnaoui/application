import { ticket } from '../ticket';
import { Component, OnInit, Input } from '@angular/core';
import { ticketService } from '../ticket.service';


import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class ticketDetailsComponent implements OnInit {

  id: number;
  ticket:ticket ;

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

  list(){
    this.router.navigate(['tickets']);
  }
}
