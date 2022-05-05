import { TestBed } from '@angular/core/testing';

import { ticketService } from './ticket.service';

describe('ticketservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ticketService = TestBed.get(ticketService);
    expect(service).toBeTruthy();
  });
});
