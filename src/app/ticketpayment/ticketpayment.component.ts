import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticketpayment',
  templateUrl: './ticketpayment.component.html',
  styleUrls: ['./ticketpayment.component.css']
})
export class TicketpaymentComponent implements OnInit {
mname: any;
tcounts:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(a=>{
      console.log(a);
      // console.log(a.moviename);
     this.mname = a["moviename"];
     this.tcounts = a["tcount"];

    })
  }

}
