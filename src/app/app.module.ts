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
import { ManagescheduleComponent } from './admin/manageschedule/manageschedule.component';
import { AddflightComponent } from './admin/addflight/addflight.component';
import { ManagediscountComponent } from './admin/managediscount/managediscount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NewbookingComponent } from './user/newbooking/newbooking.component';
import { CancelflightComponent } from './admin/cancelflight/cancelflight.component';
import { PnrstatusComponent } from './user/pnrstatus/pnrstatus.component';
import { CancelbookingComponent } from './user/cancelbooking/cancelbooking.component';
import { BlockairlineComponent } from './admin/blockairline/blockairline.component'; 
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
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
    SearchresultComponent,
    ManagescheduleComponent,
    AddflightComponent,
    ManagediscountComponent,
    NewbookingComponent,
    CancelflightComponent,
    PnrstatusComponent,
    CancelbookingComponent,
    BlockairlineComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
