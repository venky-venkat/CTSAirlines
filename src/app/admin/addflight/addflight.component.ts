import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';
import { FlightDTO } from 'src/app/services/FlightDTO';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  public flights= new FlightDTO("","","","","","",0,0,0,"",0,"");
  public airlines:any=[];
  constructor(private service: FlightdetailsService, private route:Router) { }

  ngOnInit(): void {
    this.airlines  = this.service.GetairlineDetails();
    console.log(this.airlines);
  }

  addnewflight(){
    console.log(this.flights);
    this.service.addflightdetails(this.flights);
this.route.navigate(['manageschedules']);
  }




}
