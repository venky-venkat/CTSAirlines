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

  public flights= new FlightDTO(0,"","","","","","",0,0,0,"",0,"",0,"","ON TIME");
  public airlines:any=[];
  constructor(private service: FlightdetailsService, private route:Router) { }

  ngOnInit(): void {
     this.service.GetairlineDetails().subscribe(
      (data: {}) => {
        this.airlines = data;
        console.log(data);
        this.airlines = this.airlines.filter((item:any)=>item.status != "BLOCKED")
      });
  }

  addnewflight(){
    console.log(this.flights);
    this.service.addflightdetails(this.flights)
    .subscribe((data: {}) => {
      console.log(data);
    },
    error => {
      console.log("Flight Add ERROR : ", error);
    });
    //this.route.navigate(['manageschedules']);
  }
}
