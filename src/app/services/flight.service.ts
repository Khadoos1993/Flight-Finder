import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}

  getAirports(languageCode: any) {
    const url = `${environment.flightBaseApi}${environment.flightAirportApiUrl}/${languageCode}`;
    return this.http.get<any>(url);
  }
}
