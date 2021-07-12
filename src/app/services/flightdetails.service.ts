import { Injectable } from '@angular/core';
import { FlightDTO } from './FlightDTO';


@Injectable({
  providedIn: 'root'
})
export class FlightdetailsService {

  constructor() { }

  GetFlightDetails(): FlightDTO[]{
    return [
      { Id:1, Airlinename : "Indigo", Avatarurl:"",Contactaddress:"NA",Contactnumber:1234 },
      { Id:2, Airlinename : "SpiceJet", Avatarurl:"",Contactaddress:"NA",Contactnumber:123445 }
    ]
  }
}
