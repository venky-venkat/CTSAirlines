import { Component, OnInit } from '@angular/core';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';
import { AirlineDTO } from 'src/app/services/AirlineDTO';
import {Router} from "@angular/router"

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {

  public flightdata:AirlineDTO[]=[];
  constructor(service:FlightdetailsService, private router:Router) { 
    this.flightdata = service.GetairlineDetails();
    console.log(this.flightdata);
  }

  ngOnInit(): void {
    console.log("manageairlines" +  sessionStorage.getItem('loggedUser'));
  }
addairline(){
  this.router.navigate(['/admin/Addairline']);
}

}
