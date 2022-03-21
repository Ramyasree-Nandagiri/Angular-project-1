import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieticketComponent } from './movieticket/movieticket.component';
import { TicketpaymentComponent } from './ticketpayment/ticketpayment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieticketComponent,
    TicketpaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
