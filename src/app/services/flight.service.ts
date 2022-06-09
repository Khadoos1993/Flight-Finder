import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}

  getAirports() {
    return this.http.get<any>(
      'https://api-uat-ezycommerce.ezyflight.se/api/v1/Airport/OriginsWithConnections/en-us'
    );
  }
}
