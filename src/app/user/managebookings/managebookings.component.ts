import { Component, OnInit } from '@angular/core';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.component.html',
  styleUrls: ['./managebookings.component.css']
})
export class ManagebookingsComponent implements OnInit {
  bookingdetails : any=[];
  constructor(private flightservice:FlightdetailsService) { }

  ngOnInit(): void {
    this.loadbookinghistory();
    
  }
  loadbookinghistory(){
    return (this.bookingdetails = this.flightservice.bookinghistory().subscribe(
      (data: {}) => {

        this.bookingdetails = data;
        console.log(data);
        this.bookingdetails= this.bookingdetails.filter((item:any) => item.bookingStatus !== 'CANCELLED');
         
      },
      (error:any) => {
        console.log('Booking Fetching ERROR : ', error);
      }
    ));
  }
}
