import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { FlightSearchComponent } from './flight-search/flight-search.component';

const routes: Routes = [
  {
    path: 'flight-details',
    component: FlightDetailsComponent,
  },
  {
    path: 'flights',
    component: FlightSearchComponent,
  },
  {
    path: '**',
    redirectTo: 'flights',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [AppComponent, FlightDetailsComponent, FlightSearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
