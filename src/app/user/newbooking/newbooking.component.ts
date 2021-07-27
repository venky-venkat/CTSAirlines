import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDTO } from 'src/app/services/BookingDTO';
import { FlightdetailsService } from 'src/app/services/flightdetails.service';

@Component({
  selector: 'app-newbooking',
  templateUrl: './newbooking.component.html',
  styleUrls: ['./newbooking.component.css']
})
export class NewbookingComponent implements OnInit {
  ebookingForm:FormGroup = new FormGroup({});
  ediscountForm:FormGroup = new FormGroup({});
  flightdetails:any=[];
  submitted = false;
  discountamount:number=0;
  id:number=0;
  constructor(private builder:FormBuilder,private route: ActivatedRoute,private flightservice : FlightdetailsService, private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => {
      this.id = Number(params.id);
      console.log(this.id);
    });
    this.loadflightdetails(this.id);
    this.ebookingForm = this.builder.group({
      flight: ['',[]],
      Passenger: ['',Validators.required],
      email: ['',Validators.required],
      Phone: ['',Validators.required],
      seatnumber: ['',Validators.required]
    });

    this.ediscountForm = this.builder.group({
      coupencode: ['',[]]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.ebookingForm.controls;
  }

  loadflightdetails(id:number){
    return (this.flightdetails = this.flightservice.getflightDetailsbyID(id).subscribe(
      (data: {}) => {
        this.flightdetails = data;
        console.log(data);
      },
      (error:any) => {
        console.log('Flight find by ID ERROR : ', error);
      }
    ));
  }

  Confirmbooking(){
    this.submitted = true;
    if (this.ebookingForm.invalid) {
      console.log("Booking ticket process started" + this.submitted);
      return;
    }

   var booking = {
     Id: 0,
     AirlinesName: this.flightdetails.airlineID.toString(),
     FlightName: this.flightdetails.flightname,
     PassengerName: this.ebookingForm.value.Passenger,
     Gender: "MALE",
     Age: 35,
     EmailId: this.ebookingForm.value.email,
     Phone: this.ebookingForm.value.Phone,
     SeatNumber: this.ebookingForm.value.seatnumber,
     From: this.flightdetails.from,
     To: this.flightdetails.to,
     TakeoffTime: this.flightdetails.takeoff,
     Landingtime: this.flightdetails.landing,
     Bookingtime: '',
     TotalCost: this.flightdetails.totalcost,
     UserName: 'user',
     PNR: Math.floor(1000 + Math.random() * 9000)+"VK",
     Coupencode: this.flightdetails.discountCode,
     DiscountAmount: this.flightdetails.discountamount,
     FlightStatus: '',
     BookingStatus: '',
     JourneyStatus: '',
     RefundStatus: '',
   };
    this.flightservice.addbookingflight(booking)
    .subscribe((data: {}) => {
      console.log(data);
    },
    error => {
      console.log("Booking ERROR : ", error);
    });
    console.log(this.ebookingForm.value);
    console.log("Booking Objec" + booking);
  }

  appldiscount(){
    console.log(this.ediscountForm.value);
    if (this.ediscountForm.value.coupencode == this.flightdetails.discountCode){
      this.discountamount = this.flightdetails.discountamount;
      this.flightdetails.totalcost = this.flightdetails.totalcost - this.flightdetails.discountamount;
    }
    else{
      this.flightdetails.totalcost = this.flightdetails.totalcost +  this.discountamount;
      this.discountamount = 0;
    }
  }

}
