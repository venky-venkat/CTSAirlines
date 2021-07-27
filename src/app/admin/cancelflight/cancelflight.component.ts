import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-cancelflight',
  templateUrl: './cancelflight.component.html',
  styleUrls: ['./cancelflight.component.css']
})
export class CancelflightComponent implements OnInit {
  id:number=0;
  constructor(private route:ActivatedRoute,private flightservice:FlightdetailsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = Number(params.id);
      console.log(this.id);
    });
  }

  cancelflight(){
    this.flightservice.cancelflight(this.id)
    .subscribe((data: {}) => {
      console.log(data);
      this.router.navigate(['/manageschedules']);
    },
    error => {
      console.log("Cencel Flight ERROR : ", error);
    });
  }

}
