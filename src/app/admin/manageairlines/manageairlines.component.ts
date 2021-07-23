import { Component, OnInit } from '@angular/core';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';
import { AirlineDTO } from 'src/app/services/AirlineDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css'],
})
export class ManageairlinesComponent implements OnInit {
  public flightdata: any = [];
  constructor(private service: FlightdetailsService, private router: Router) {
  }
  loadAirlines():any {
    return this.service.GetairlineDetails().subscribe(
      (data: {}) => {
        this.flightdata = data;
        console.log(data);
      },
      (error) => {
        console.log('Airline ERROR : ', error);
      }
    );
  }
  ngOnInit(): void {
    this.loadAirlines();
  }
  addairline() {
    this.router.navigate(['/admin/Addairline']);
  }
}
