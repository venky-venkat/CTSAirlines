import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.component.html',
  styleUrls: ['./manageschedule.component.css'],
})
export class ManagescheduleComponent implements OnInit {
  public flights: any = [];
  constructor(private service: FlightdetailsService, private route: Router) {}

  ngOnInit(): void {
    this.loadflights();
    console.log(this.flights);
  }

  loadflights(): any {
    return (this.flights = this.service.getflightDetails().subscribe(
      (data: {}) => {
        this.flights = data;
        console.log(data);
      },
      (error) => {
        console.log('Flight ERROR : ', error);
      }
    ));
  }
  addflight() {
    this.route.navigate(['addflight']);
  }
}
