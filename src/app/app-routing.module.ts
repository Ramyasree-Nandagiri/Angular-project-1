import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieticketComponent } from './movieticket/movieticket.component';
import { TicketpaymentComponent } from './ticketpayment/ticketpayment.component';

const routes: Routes = [
  {path:'',component:MovieticketComponent},
  {path:'movieticket',component:MovieticketComponent},
  {path:'ticketpayment',component:TicketpaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
