import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManageairlinesComponent } from './admin/manageairlines/manageairlines.component';
import { AddairlineComponent } from './admin/addairline/addairline.component';
import { BookflightComponent } from './user/bookflight/bookflight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FlightdiscountComponent } from './user/flightdiscount/flightdiscount.component';
import { BookinghistoryComponent } from './user/bookinghistory/bookinghistory.component';
import { ManagebookingsComponent } from './user/managebookings/managebookings.component';
import { SearchComponent } from './user/search/search.component';
import { SearchresultComponent } from './user/searchresult/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ManageairlinesComponent,
    AddairlineComponent,
    BookflightComponent,
    LoginComponent,
    FlightdiscountComponent,
    BookinghistoryComponent,
    ManagebookingsComponent,
    SearchComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
