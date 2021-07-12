import { Injectable } from '@angular/core';
import { AirlineDTO } from './AirlineDTO';
import { FlightDTO } from './FlightDTO';


@Injectable({
  providedIn: 'root'
})
export class FlightdetailsService {

  addairline: AirlineDTO[] = [];
  addflight: FlightDTO[] = [];
  constructor() { }

  GetairlineDetails(): AirlineDTO[] {
    return this.addairline;
  }

  addairlinedetails(obj: any): void {
    this.addairline.push(
      {
        Id: 0,
        Airlinename: obj.airline,
        Avatarurl: obj.logoavatar,
        Contactaddress: obj.contactaddress,
        Contactnumber: obj.contactno
      }
    )
  }

  getflightDetails():FlightDTO[]{
    return this.addflight;
  }

  addflightdetails(obj: any): void {
    this.addflight.push(
      {
        Airline: obj.Airline,
        Flightno: obj.Flightno,
        From: obj.From,
        To: obj.To,
        Takeoff: obj.Takeoff,
        Landing: obj.Landing,
        Meals: obj.Meals,
        Scheduleddays: obj.Scheduledays,
        Noofbusinessseats: obj.Noofbusinessseats,
        Noofnonbusinessseats: obj.Noofnonbusinessseats,
        Noofrows: obj.Noofrows,
        Totalprice: obj.Totalprice
      }
    )
  }


}
