import { Observable } from "rxjs";
import { ticketService } from "../ticket.service";
import { ticket } from "../ticket";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"]
})
export class ticketListComponent implements OnInit {
  tickets: Observable<ticket[]>;

  constructor(private ticketService: ticketService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tickets = this.ticketService.getList();
    console.log("tickets :: ", this.tickets);
  }

  delete(id: number) {
    this.ticketService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  ticketDetails(id: number){
    this.router.navigate(['details', id]);
  }

  update(id: number){
    this.router.navigate(['update', id]);
  }
}
