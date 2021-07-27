import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
  id:number=0;
  bookingdetails:any=[];
  constructor(private route:ActivatedRoute,private flightservice:FlightdetailsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = Number(params.id);
      console.log(this.id);
      this.loadbookingflightdetails();
    });
  }

  loadbookingflightdetails(){
  return  this.flightservice.getbookingbyid(this.id)
    .subscribe((data: {}) => {
      this.bookingdetails = data;
      console.log(data);
    },
    error =>{
      console.log('Booking Fetching ERROR : ', error);
    }
    )

  };
  
  
  cancelbooking(){
    var cd = new Date().getDate();
    var tf =new Date(this.bookingdetails.takeoffTime).getDate();
    if (tf - cd > 1){
      this.flightservice.cancelbooking(this.id)
      .subscribe((data: {}) => {
        console.log(data);
        this.router.navigate(['/managebooking']);
      },
      error => {
        console.log("Cencel Booking ERROR : ", error);
      });
    }
    else{
    alert("You cant cancel ticket On the same day of journey");
    }
    
  }

}
