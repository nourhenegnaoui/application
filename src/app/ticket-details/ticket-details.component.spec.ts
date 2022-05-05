import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ticketDetailsComponent } from './ticket-details.component';

describe('ticketDetailsComponent', () => {
  let component: ticketDetailsComponent;
  let fixture: ComponentFixture<ticketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ticketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ticketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
