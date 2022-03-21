import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketpaymentComponent } from './ticketpayment.component';

describe('TicketpaymentComponent', () => {
  let component: TicketpaymentComponent;
  let fixture: ComponentFixture<TicketpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
