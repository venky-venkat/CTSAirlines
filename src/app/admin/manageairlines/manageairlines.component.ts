import { Component, OnInit } from '@angular/core';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';
import { FlightDTO } from 'src/app/services/FlightDTO';
import {Router} from "@angular/router"

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {

  public flightdata:FlightDTO[]=[];
  constructor(service:FlightdetailsService, private router:Router) { 
    this.flightdata = service.GetFlightDetails();
    console.log(this.flightdata);
  }

  ngOnInit(): void {
    console.log(this.flightdata);
  }
addairline(){
  this.router.navigate(['/admin/Addairline']);
}

}
