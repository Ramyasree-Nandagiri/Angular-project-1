import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieticket',
  templateUrl: './movieticket.component.html',
  styleUrls: ['./movieticket.component.css']
})
export class MovieticketComponent implements OnInit {

  movieName='';

  ticketCount='';


  constructor() { }


  ngOnInit(): void {
  }

}
