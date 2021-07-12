import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html',
  styleUrls: ['./manageschedule.component.css']
})
export class ManagescheduleComponent implements OnInit {

  public flights:any=[];
  constructor(private service:FlightdetailsService,private route:Router) { }

  ngOnInit(): void {
    this.flights = this.service.getflightDetails();
    console.log(this.flights);
  }

  addflight(){
this.route.navigate(['addflight']);
  }

}
