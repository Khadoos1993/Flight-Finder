import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  constructor() {}
  flightDetails: any;

  ngOnInit(): void {
    this.flightDetails = window.history.state['flightDetails'];
  }
}
