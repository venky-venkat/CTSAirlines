import { Component, OnInit } from '@angular/core';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  constructor(private service:FlightdetailsService) { }
  bookingdetails : any=[];
  ngOnInit(): void {
this.loadbookinghistory();
  }

  loadbookinghistory(){
    return (this.bookingdetails = this.service.bookinghistory().subscribe(
      (data: {}) => {
        this.bookingdetails = data;
        console.log(data);
      },
      (error) => {
        console.log('Booking History ERROR : ', error);
      }
    ));
  }

}
