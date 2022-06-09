import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Type } from '../models/enum';
import { Flight } from '../models/flight';
import { FlightService } from '../services/flight.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {
  public type = Type;
  tripType = Type.round;
  flightDetails = new Flight();
  airports: Array<any> = [];

  constructor(private router: Router, private flight: FlightService) {}

  ngOnInit(): void {
    this.flight.getAirports().subscribe((response: any) => {
      this.airports = response.airports.map((x: any) => x.code);
    });
  }

  search() {
    if (
      this.flightDetails.origin == this.flightDetails.destination ||
      this.flightDetails.getDate(this.flightDetails.departure) >
        this.flightDetails.getDate(this.flightDetails.returnDate)
    ) {
      return;
    }
    let navigationExtras: NavigationExtras = {
      state: { flightDetails: this.flightDetails },
    };
    this.router.navigate(['/flight-details'], navigationExtras);
  }
}
